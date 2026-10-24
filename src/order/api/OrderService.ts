import axios from "axios";
import {getToken} from "../../auth/api/auth.api.ts";


import type {CartItem} from "../../cart/cart.items.ts";
import type {BookOrderResponse} from "../dto/BookOrderResponse.ts";

const ORDER_API_BASE_URL = "http://localhost:8080/api/orders";

axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token=getToken();
        if (token) {
            config.headers["Authorization"] =token;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
export const getBookOrderApiCall =
    async ():Promise<BookOrderResponse[]> =>{
        const response =
            await axios.get(ORDER_API_BASE_URL);
        if(response.status !== 200){
            throw new Error("Failed to get book order");
        }
        return response.data;
    }

export const createOrderApiCall =
    async (items:CartItem[])=>{
        const response =
            await axios.post(ORDER_API_BASE_URL, items);
        if(response.status !== 200){
            throw new Error("Failed to create order");
        }
        return response.data;
    }