import axios from "axios";
import {setAccessToken} from "../service/tokenStore.js";

const authApi = axios.create({
    baseURL: "http://localhost:8081/api/auth",
    timeout: 10000,
    withCredentials: true,

    headers: {
        "Content-Type": "application/json"
    }
});


export async function refreshToken() {

    const response = await authApi.post("/refresh");

    const newAccessToken =
        response.data.accessToken;

    if (!newAccessToken) {
        throw new Error(
            "Refresh API did not return access token"
        );
    }

    setAccessToken(newAccessToken);

    return newAccessToken;
}