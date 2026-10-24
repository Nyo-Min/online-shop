import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useBookById } from "../book/hook/useApiQueries.tsx";
import {useCartContext} from "../cart/CartContextProvider.tsx";

const INDIGO_COLOR = "#6610f2";

export default function BookDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: book, isLoading: isBookLoading, isError } = useBookById(id!);
    const [quantity, setQuantity] = useState<number>(1);

    const {addToCart} = useCartContext();

    if (isBookLoading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading book details...</p>
            </div>
        );
    }

    if (isError || !book) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger" role="alert">
                    Book not found or failed to load details.
                </div>
                <Link to="/books" className="btn btn-outline-secondary">
                    &larr; Back to Books
                </Link>
            </div>
        );
    }

    const isOutOfStock = book.stockQuantity <= 0;

    const handleDecrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        if (quantity < book.stockQuantity) setQuantity((prev) => prev + 1);
    };

    const handleAddToCart = () => {
        addToCart(book,quantity);
    };

    return (
        <div className="container py-5">
            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/books-page" className="text-decoration-none">Books</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {book.title}
                    </li>
                </ol>
            </nav>

            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-lg-5 p-4">
                    <div className="row g-4 align-items-start">

                        {/* Book Cover Image */}
                        <div className="col-12 col-md-5 col-lg-4 text-center">
                            <div className="bg-light p-3 rounded-3 shadow-sm border">
                                <img
                                    src={`/images/books/${book.coverImage}` || "https://via.placeholder.com/350x500?text=No+Cover"}
                                    alt={book.title}
                                    className="img-fluid rounded shadow-sm"
                                    style={{ maxHeight: "420px", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        {/* Book Info & Purchase Actions */}
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2">
                  {book.categoryName}
                </span>
                                <span
                                    className={`badge rounded-pill px-3 py-2 ${
                                        isOutOfStock
                                            ? "bg-danger-subtle text-danger border border-danger-subtle"
                                            : "bg-success-subtle text-success border border-success-subtle"
                                    }`}
                                >
                  {isOutOfStock ? "Out of Stock" : `In Stock (${book.stockQuantity})`}
                </span>
                            </div>

                            <h2 className="display-6 fw-bold mb-2">{book.title}</h2>
                            <p className="fs-5 text-secondary mb-3">
                                By <span className="fw-medium text-dark">{book.authorName}</span>
                            </p>

                            <div className="d-flex align-items-baseline gap-3 mb-4 pb-3 border-bottom">
                                <h3 className="text-primary fw-bold mb-0">
                                    ${book.price.toFixed(2)}
                                </h3>
                                <span className="text-muted small">
                  ISBN: <span className="text-body font-monospace">{book.isbn}</span>
                </span>
                            </div>

                            {/* Summary */}
                            <div className="mb-4">
                                <h6 className="fw-semibold text-uppercase text-muted small">Overview</h6>
                                <p className="text-muted lh-base" style={{ whiteSpace: "pre-line" }}>
                                    {book.summary}
                                </p>
                            </div>

                            {/* Add to Cart Actions */}
                            <div className="pt-2">
                                <div className="row g-3 align-items-center">

                                    {/* Quantity Counter */}
                                    <div className="col-auto">
                                        <div className="input-group" style={{ width: "135px" }}>
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={handleDecrease}
                                                disabled={quantity <= 1 || isOutOfStock}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center fw-semibold"
                                                value={quantity}
                                                readOnly
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={handleIncrease}
                                                disabled={quantity >= book.stockQuantity || isOutOfStock}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <div className="col-12 col-sm-auto flex-grow-1">
                                        <button
                                            className="btn btn-lg w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                                            onClick={handleAddToCart}
                                            disabled={isOutOfStock}
                                            style={{backgroundColor:INDIGO_COLOR,color:"white"}}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                            </svg>
                                            {isOutOfStock ? "Sold Out" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>

                                {/* Status description */}
                                <div className="mt-3 text-muted small">
                                    Status: <span className="fw-medium text-capitalize text-body">{book.status}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}