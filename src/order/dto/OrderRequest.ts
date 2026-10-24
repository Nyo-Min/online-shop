import type {CartItem} from "../../cart/cart.items.ts";

export interface OrderRequest{
    purchaseItems: CartItem[];
}