import {useState} from "react";
import {useBooks} from "../book/hook/useApiQueries.tsx";
import type {BookDto} from "../book/dto/book.dto.ts";
import {Link} from "react-router-dom";
const INDIGO_COLOR = "#6610f2";
export default function BookPage() {
    const [currentPage,setCurrentPage] = useState(0);
    const pageSize = 20;
    const {data: booksPage, isLoading: isBooksLoading, isError} = useBooks(currentPage, pageSize);

    const books = booksPage?.content || [];
    const totalPages = booksPage?.totalPages || 0;
    const handlePageChange = (newPage: number) => {
        if(newPage >= 0 && newPage < totalPages){
            setCurrentPage(newPage);
            window.scrollTo({top:0,behavior:'smooth'});
        }
    };
    if(isBooksLoading){
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border" style={{color:INDIGO_COLOR}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if(isError){
        return (
            <div className="text-center py-5 text-danger">Error loading books</div>
        )
    }

    return (
        <>
            <div className="d-flex flex-column min-vh-100 bg-light font-sans-serif">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col text-center">
                            <h2 className="fw-bold" style={{color:INDIGO_COLOR}}>All Books</h2>
                            <p className="text-muted">Browse our collection of books</p>
                        </div>
                    </div>

                    {
                        books.length > 0 ? (
                            <>
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {
                                        books.map((book:BookDto) =>(
                                            <div className="col" key={book.id}>
                                                <div className="card h-100 shadow-sm border-0 bg-white">
                                                    <div className="p-3 bg-white text-center">
                                                        <img src={`/images/books/${book.coverImage}`}
                                                             alt={book.title}
                                                             className="img-fluid rounded shadow-sm object-fit-cover"
                                                             style={{height:"220px",width:"100%",objectFit:"cover"}}
                                                        />
                                                    </div>
                                                    <div className="card-body d-flex flex-column pt-0">
                                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                                            <span className="badge bg-light text-dark border">
                                                                {book.categoryName}
                                                            </span>
                                                            <span className="fw-bold fs-5" style={{color: INDIGO_COLOR}}>
                                                                ${book.price}
                                                            </span>
                                                        </div>
                                                        <h5 className="card-title fw-bold text-dark text-truncate mb-1">
                                                            {book.title}
                                                        </h5>
                                                        <p className="text-muted small mb-2">{book.authorName}</p>
                                                        <p className="card-text text-muted small bm-3"
                                                        style={{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",
                                                        overflow:"hidden"}}>
                                                            {book.summary}
                                                        </p>
                                                        <div className="mt-auto">
                                                            <Link to={`/book-details/${book.id}`} className="btn w-100 text-white fw-semibold shadow-sm"
                                                            style={{backgroundColor:INDIGO_COLOR}}>
                                                                View Details
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    totalPages > 1 && (
                                        <nav aria-label="Book navigation" className="mt-5">
                                            <ul className="pagination justify-content-center">
                                                <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                                                    <button className="page-link"
                                                    onClick={() => handlePageChange(currentPage - 1)}>
                                                        Previous
                                                    </button>
                                                </li>
                                                {
                                                    [...Array(totalPages)].map((_,index) =>(
                                                        <li key={index} className={`page-item ${currentPage === index ? 'active':''}`}>
                                                            <button className="page-link"
                                                            onClick={() => handlePageChange(index)}
                                                            style={currentPage === index ? {backgroundColor:INDIGO_COLOR,borderColor:INDIGO_COLOR} : {}}>
                                                                {index + 1}
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                                <li className={`page-item ${currentPage === totalPages -1 ? 'disabled':''}`}>
                                                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                                        Next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    )
                                }
                            </>
                        ) : (
                            <div className="text-center py-5 text-muted">
                                <h4 className="fw-bold" style={{color:INDIGO_COLOR}}>No Books Found</h4>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    );
}
