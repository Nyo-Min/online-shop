import type {RegisterDto} from "../dto/RegisterDto.ts";
import axios from "axios";
import type {LoginDto} from "../dto/LoginDto.ts";


const AUTH_API_BASE_URL = "http://localhost:8080/api/auth";

export const registerApiCall =
    async (data:RegisterDto):Promise<string> => {
    const response =
        await axios.post(`${AUTH_API_BASE_URL}/register`, data);
    if(response.status !== 200){
        throw new Error("Failed to register");
    }
    return response.data;
}
export const login =
    async (data:LoginDto):Promise<string> => {
    const response =
        await axios.post(`${AUTH_API_BASE_URL}/login`, data);
    if(response.status !== 200){
        throw new Error("Failed to login");
    }
    return response.data;
}
export const logout = () => {
    localStorage.clear();
}
export const getToken = () => {
    return localStorage.getItem("token");
}