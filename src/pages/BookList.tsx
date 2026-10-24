import { useBookContext } from "../book/provider/BookContextProvider.tsx";
import {Link} from "react-router-dom";





const INDIGO_COLOR = "#6610f2";

export default function BookList() {
    const { books } = useBookContext();
    console.log(books);

    return (
        <div className="d-flex flex-column min-vh-100 bg-light font-sans-serif">
            {/* Header / Title Section */}
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col text-center">
                        <h2 className="fw-bold" style={{ color: INDIGO_COLOR }}>Book Collection</h2>
                        <p className="text-muted">Explore books based on your selection</p>
                    </div>
                </div>

                {/* Books Grid */}
                {books && books.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {books.map((book) => (
                            <div className="col" key={book.id}>
                                <div className="card h-100 shadow-sm border-0 bg-white">
                                    {/* Image with Padding container */}
                                    <div className="p-3 bg-white text-center">
                                        <img
                                            src={`/images/books/${book.coverImage}`}
                                            alt={book.title}
                                            className="img-fluid rounded shadow-sm object-fit-cover"
                                            style={{ height: "220px", width: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column pt-0">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-light text-dark border">
                                                {book.categoryName}
                                            </span>
                                            <span className="fw-bold fs-5" style={{ color: INDIGO_COLOR }}>
                                                ${book.price}
                                            </span>
                                        </div>
                                        <h5 className="card-title fw-bold text-dark text-truncate mb-1">
                                            {book.title}
                                        </h5>
                                        <p className="text-muted small mb-2">By {book.authorName}</p>
                                        <p className="card-text text-muted small mb-3" style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden"
                                        }}>
                                            {book.summary}
                                        </p>
                                        <div className="mt-auto">
                                            <Link to={`/book-details/${book.id}`}
                                                className="btn w-100 text-white fw-semibold shadow-sm"
                                                style={{ backgroundColor: INDIGO_COLOR }}
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <div className="card border-0 shadow-sm p-5 bg-white mx-auto" style={{ maxWidth: "500px" }}>
                            <i className="bi bi-journal-x fs-1 text-muted mb-3"></i>
                            <h4 className="fw-bold text-secondary">No Books Found</h4>
                            <p className="text-muted mb-0">Please go back and select a category or author to view books.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
