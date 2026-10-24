/*
public record BookOrderResponse(
        UUID id,
        String title,
        Integer isbn,
        String summary,
        double price,
        String coverImage,
        int stockQuantity,
        String categoryName,
        String authorName
) {
}
 */

export interface BookOrderResponse {
    id:string;
    title:string;
    isbn:number;
    summary:string;
    price:number;
    coverImage:string;
    stockQuantity:number;
    categoryName:string;
    authorName:string;
}