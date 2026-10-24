import type {AuthorDto, BookDto, CategoryDto, PageResponse} from "../dto/book.dto";
import  axios from "axios";

const API_URL = "http://localhost:8080/api/books";


//http://localhost:8080/api/books/all?page=0&size=40
export const apiService ={
    getBookById: async(id:string):Promise<BookDto> =>{
        const response =
            await axios.get<BookDto>(`${API_URL}/${id}`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    },
    getBooks: async (page:number=0, size:number=20): Promise<PageResponse<BookDto>> =>{
        const response =
            await axios
                .get<PageResponse<BookDto>>(`${API_URL}/all?page=${page}&size=${size}`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    },
    getAuthors: async():Promise<AuthorDto[]> =>{
        const response =
            await axios.get<AuthorDto[]>(`${API_URL}/author`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    },
    getCategories: async():Promise<CategoryDto[]> =>{
        const response =
            await axios.get<CategoryDto[]>(`${API_URL}/category`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    },
    getBookByAuthorName: async(name:string):Promise<BookDto[]> =>{
        const response =
            await axios.get<BookDto[]>(`${API_URL}/author/${name}`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    },
    getBookByCategoryName: async(name:string):Promise<BookDto[]> =>{
        const response =
            await axios.get<BookDto[]>(`${API_URL}/category/${name}`);
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        return response.data;
    }
}







