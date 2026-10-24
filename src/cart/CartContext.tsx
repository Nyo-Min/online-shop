import type {CartItem} from "./cart.items.ts";
import {createContext} from "react";
import type {BookDto} from "../book/dto/book.dto.ts";

export interface CartContextType{
    cartItems:CartItem[];
    addToCart:(item:BookDto,quantity:number)=>void;
    removeFromCart:(id:string)=>void;
    clearCart:()=>void;
    totalAmount:number;
}

export const toCartItem = (item:BookDto) =>{
    const cartITem:CartItem={
        id:item.id,
        title:item.title,
        authorName:item.authorName,
        isbn:item.isbn,
        summary:item.summary,
        price:item.price,
        coverImage:item.coverImage,
        categoryName:item.categoryName,
        quantity:1
    }
    return cartITem;
}


export const CartContext=
    createContext<CartContextType | null>(null);