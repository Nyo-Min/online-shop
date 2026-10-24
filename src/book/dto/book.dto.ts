

export interface AuthorDto{
    id:string;
    name:string;
    bio:string;
    profileImage:string;
    dateOfBith:string;
    nationality:string;
}


export interface CategoryDto{
    id:string;
    name:string;
    description:string;
    image:string;
    slug:string;
}

export interface PageResponse<T>{
    content: T[];
    totalElements:number;
    totalPages:number;
    number:number;
    size:number;
    empty:boolean;
    first:boolean;
    last:boolean;
}

export interface BookDto{
    id:string;
    title:string;
    isbn:number;
    summary:string;
    price:number;
    coverImage:string;
    stockQuantity:number;
    status:string;
    categoryName:string;
    authorName:string;
}