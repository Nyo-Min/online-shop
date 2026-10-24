import useOrderBooks from "../hook/useOrderBooks.tsx";
import type {BookOrderResponse} from "../dto/BookOrderResponse.ts";



export default function OrderedBook() {
    const { books } = useOrderBooks();

    return (
        <div className="container py-5">
            {/* Page Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center border-bottom pb-4 mb-4 gap-3">
                <div>
                    <h2 className="fw-bold mb-1" style={{ color: "var(--bs-indigo)" }}>
                        Ordered Books
                    </h2>
                    <p className="text-secondary small mb-0">
                        Review your purchased titles and order status details.
                    </p>
                </div>
                <span
                    className="badge rounded-pill align-self-start align-self-md-center px-3 py-2 fs-6 fw-semibold text-white shadow-sm"
                    style={{ backgroundColor: "var(--bs-indigo)" }}
                >
          {books?.length ?? 0} {books?.length === 1 ? "Item" : "Items"}
        </span>
            </div>

            {/* Empty State */}
            {!books || books.length === 0 ? (
                <div className="text-center py-5 my-5">
                    <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                            width: "72px",
                            height: "72px",
                            backgroundColor: "rgba(102, 16, 242, 0.1)",
                            color: "var(--bs-indigo)",
                        }}
                    >
                        <i className="bi bi-book fs-2">📚</i>
                    </div>
                    <h4 className="fw-semibold text-dark">No ordered books found</h4>
                    <p className="text-muted small">You haven't placed any book orders yet.</p>
                </div>
            ) : (
                /* Books Grid */
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {books.map((book: BookOrderResponse) => (
                        <div className="col" key={book.id}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                                {/* Book Cover */}
                                <div
                                    className="position-relative bg-light d-flex align-items-center justify-content-center"
                                    style={{ height: "240px" }}
                                >
                                    <img
                                        src={`/images/books/${book.coverImage}`}
                                        alt={book.title}
                                        className="w-100 h-100 object-fit-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://placehold.co/400x600/6610f2/ffffff?text=Book+Cover";
                                        }}
                                    />
                                    {/* Category Pill */}
                                    <span
                                        className="badge position-absolute top-0 start-0 m-3 px-2.5 py-1.5 rounded-pill text-white shadow-sm fw-medium"
                                        style={{
                                            backgroundColor: "var(--bs-indigo)",
                                            fontSize: "0.75rem",
                                        }}
                                    >
                    {book.categoryName}
                  </span>
                                </div>

                                {/* Card Body */}
                                <div className="card-body d-flex flex-column p-4">
                                    <div className="mb-2">
                                        <h5
                                            className="card-title fw-bold text-truncate mb-1"
                                            title={book.title}
                                        >
                                            {book.title}
                                        </h5>
                                        <p className="text-muted small mb-2">By {book.authorName}</p>
                                    </div>

                                    <p
                                        className="card-text text-secondary small flex-grow-1 mb-3"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {book.summary}
                                    </p>

                                    <div className="d-flex align-items-center justify-content-between text-muted border-top pt-3 mt-auto small">
                                        <span>ISBN</span>
                                        <span className="font-monospace text-dark fw-medium">
                      {book.isbn}
                    </span>
                                    </div>

                                    {/* Price & Stock Row */}
                                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2">
                                        <div>
                                            <span className="text-muted d-block small lh-1">Price</span>
                                            <span
                                                className="fs-5 fw-bold"
                                                style={{ color: "var(--bs-indigo)" }}
                                            >
                        ${book.price.toFixed(2)}
                      </span>
                                        </div>

                                        <span
                                            className="badge rounded-pill px-2.5 py-2"
                                            style={{
                                                backgroundColor: "rgba(102, 16, 242, 0.1)",
                                                color: "var(--bs-indigo)",
                                                fontSize: "0.75rem",
                                            }}
                                        >
                      Qty: {book.stockQuantity}
                    </span>
                                    </div>
                                </div>

                                {/* Action Footer */}
                                <div className="card-footer bg-transparent border-0 px-4 pb-4 pt-0">
                                    <button
                                        className="btn w-100 rounded-3 text-white fw-semibold shadow-sm py-2"
                                        style={{
                                            backgroundColor: "var(--bs-indigo)",
                                            borderColor: "var(--bs-indigo)",
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
