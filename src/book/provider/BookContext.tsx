import type {BookDto} from "../dto/book.dto.ts";
import {createContext} from "react";


export interface BookContextType{
    books:BookDto[];
    setBooks: (books: BookDto[]) => void;
}

export const BookContext =
    createContext<BookContextType>({
    books: [],
    setBooks: () => {}
});

