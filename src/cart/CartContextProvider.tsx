import {type ReactNode, useContext, useState} from "react";
import type {CartItem} from "./cart.items.ts";
import type {BookDto} from "../book/dto/book.dto.ts";
import {CartContext, type CartContextType, toCartItem} from "./CartContext.tsx";


export default function CartContextProvider({children}:{children:ReactNode}) {
    const [cartItems,setCartItems]=useState<CartItem[]>([]);

    const isDuplicated=(id:string)=>{
        return cartItems.some(item=>item.id===id);
    }

    const addToCart = (item:BookDto,quantity:number) =>{
        if(isDuplicated(item.id)){
            return;
        }
        const cartItem:CartItem=toCartItem(item);
        cartItem.quantity=quantity;
        setCartItems([...cartItems,cartItem]);
    }

    const removeFromCart = (id:string) =>{
        setCartItems(cartItems.filter(item=>item.id!==id));
    }
    const clearCart = () =>{
        setCartItems([]);
    }
    const totalAmount = cartItems.reduce((total,item)=>total+item.price*item.quantity,0);
    const value:CartContextType={cartItems,addToCart,removeFromCart,clearCart,totalAmount};
    return (
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    );
}
export const useCartContext = () =>{
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
}
