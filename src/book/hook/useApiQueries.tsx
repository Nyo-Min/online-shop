import {useQuery} from "@tanstack/react-query";
import {apiService} from "../api/apiClient.ts";

export const useBooksByAuthorName =
    (authorName:string) =>{
    return useQuery({
        queryKey:["books",authorName],
        queryFn:() => apiService.getBookByAuthorName(authorName)
    });
}
export const useBookById =(id:string) =>{
    return useQuery({
        queryKey:["books",id],
        queryFn:() => apiService.getBookById(id)
    });
}
export const useBookByCategoryName =
    (categoryName:string) =>{
    return useQuery({
        queryKey:["books",categoryName],
        queryFn:() => apiService.getBookByCategoryName(categoryName)
    });
}

export const useBooks = (page:number,size:number)=>{
    return useQuery({
        queryKey:["books",page,size],
        queryFn:() => apiService.getBooks(page,size)
    });
}
export const useAuthors = () =>{
    return useQuery({
        queryKey:["authors"],
        queryFn: apiService.getAuthors
    });
}

export const useCategories = () =>{
    return useQuery({
        queryKey:["categories"],
        queryFn: apiService.getCategories
    });
}