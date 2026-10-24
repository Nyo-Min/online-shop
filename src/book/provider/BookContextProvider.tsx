import {type ReactNode, useContext, useState} from "react";
import type {BookDto} from "../dto/book.dto.ts";
import { BookContext } from "./BookContext.tsx";

export function BookContextProvider({children}:{children:ReactNode}) {
    const [books, setBooks] = useState<BookDto[]>([]);
    const value = {books, setBooks};
    return (
        <>
            <BookContext.Provider value={value}>
                {children}
            </BookContext.Provider>
        </>
    );
}
export function useBookContext() {
    const context = useContext(BookContext);
    if(context == null){
        throw new Error('cannot create useBookContext outside of BookContextProvider')
    }
    return context;
}
