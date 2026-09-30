import api from "../api/api.js"
import {setUser} from "./userStore.js";
import {setAccessToken} from "./tokenStore.js";

export async function registerUser(user) {

    const response = await api.post("register", user);
    return response.data;
}

export async function loginUser(user) {

    const request = {
        "email": user.email,
        "password": user.password
    }

    const response = await api.post("login", request);

    if (response.status === 200) {

        let user = {
            "email": response.data.email,
            "username": response.data.username,
            "id": response.data.id,
            "roles": response.data.roles
        }

        setUser(user);
        setAccessToken(response.data.accessToken)
    }

}

export async function refreshToken() {

    console.log("Refreshing token...");
    const response = await api.post("refresh");
    if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        console.log("accessToken succesfully set...");
    }
}

export async function loginCheck(){
    const response = await api.get("me");

    if(response.status===200){
        console.log("successfully get me...");

    }
    return response.data;
}
