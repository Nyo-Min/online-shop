import type {BookOrderResponse} from "../dto/BookOrderResponse.ts";
import {useEffect, useState} from "react";
import {getBookOrderApiCall} from "../api/OrderService.ts";


export default function useOrderBooks() {
    const [books,setBooks] =useState<BookOrderResponse[]>([]);
    useEffect(() => {
        const getAllOrderBooks = async () => {
            const books = await getBookOrderApiCall();
            setBooks(books);
        };
        getAllOrderBooks();
    }, []);
    return (

            {books}

    );
}
