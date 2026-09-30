import axios from "axios";
import {clearAccessToken, getAccessToken} from "../service/tokenStore.js";
import {refreshToken} from "./refreshAPI.js";
import {clearUser} from "../service/userStore.js";

const api = axios.create({

    baseURL: "http://localhost:8081/api/auth",

    timeout: 10000,

    withCredentials: true,

    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    config => {

        const token = getAccessToken();
        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },

    error => Promise.reject(error)
);


let refreshPromise = null;


function getNewAccessToken() {

    if (!refreshPromise) {

        refreshPromise = refreshToken()
            .finally(() => {

                refreshPromise = null;
            });
    }

    return refreshPromise;
}


api.interceptors.response.use(
    response => response,

    async error => {

        const originalRequest = error.config;

        if (!error.response) {

            return Promise.reject(error);
        }

        if (
            error.response.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                console.log(
                    "Access token expired. Refreshing..."
                );

                const newAccessToken =
                    await getNewAccessToken();


                /*
                 * Update original request
                 */
                originalRequest.headers =
                    originalRequest.headers || {};

                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;


                console.log(
                    "Retrying original request..."
                );


                return api(originalRequest);

            } catch (refreshError) {

                console.log(
                    "Refresh token expired or invalid"
                );


                clearAccessToken();
                clearUser();
                window.location.href = "/";


                return Promise.reject(refreshError);
            }
        }


        return Promise.reject(error);
    }
);


export default api;