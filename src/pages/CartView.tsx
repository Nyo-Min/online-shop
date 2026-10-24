import { Link } from "react-router-dom";
import { useCartContext } from "../cart/CartContextProvider.tsx";



export default function CartView() {
    const { cartItems, removeFromCart, clearCart, totalAmount } = useCartContext();

    // Indigo theme helper style objects (Bootstrap's default indigo: #6610f2)
    const indigoColor = "#6610f2";
    const indigoBgLight = "#f1e8ff";

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="container py-5 text-center">
                <div className="card border-0 shadow-sm rounded-4 p-5 mx-auto" style={{ maxWidth: "520px" }}>
                    <div className="mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill={indigoColor}
                            className="bi bi-cart-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 7.046 8.246a.5.5 0 0 0 .708.708L8.5 8.207l.746.747a.5.5 0 0 0 .708-.708L9.207 7.5l.747-.746a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                    </div>
                    <h3 className="fw-bold text-dark">Your cart is empty</h3>
                    <p className="text-muted mb-4">Looks like you haven't added any books to your cart yet.</p>
                    <Link
                        to="/"
                        className="btn text-white fw-semibold rounded-pill px-4 py-2"
                        style={{ backgroundColor: indigoColor }}
                    >
                        Explore Books
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                <div>
                    <h2 className="fw-bold mb-1" style={{ color: indigoColor }}>
                        Shopping Cart
                    </h2>
                    <span className="text-muted small">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </span>
                </div>
                <button
                    onClick={clearCart}
                    className="btn btn-outline-danger btn-sm rounded-pill px-3"
                >
                    Clear All
                </button>
            </div>

            <div className="row g-4 align-items-start">
                {/* Left Column: Cart Items List */}
                <div className="col-12 col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <ul className="list-group list-group-flush">
                            {cartItems.map((item) => (
                                <li key={item.id} className="list-group-item p-3 p-sm-4">
                                    <div className="row g-3 align-items-center">
                                        {/* Cover Thumbnail */}
                                        <div className="col-3 col-sm-2 text-center">
                                            <img
                                                src={`/images/books/${item.coverImage}` || "https://via.placeholder.com/80x110?text=Book"}
                                                alt={item.title}
                                                className="img-fluid rounded-2 shadow-sm border"
                                                style={{ maxHeight: "95px", objectFit: "cover" }}
                                            />
                                        </div>

                                        {/* Book Info */}
                                        <div className="col-9 col-sm-5">
                      <span
                          className="badge rounded-pill mb-1 px-2 py-1"
                          style={{ backgroundColor: indigoBgLight, color: indigoColor }}
                      >
                        {item.categoryName}
                      </span>
                                            <h6 className="fw-bold text-dark mb-1 text-truncate" title={item.title}>
                                                {item.title}
                                            </h6>
                                            <p className="text-muted small mb-1">
                                                By <span className="fw-medium text-secondary">{item.authorName}</span>
                                            </p>
                                            <span className="text-muted small">
                        ISBN: <span className="font-monospace">{item.isbn}</span>
                      </span>
                                        </div>

                                        {/* Quantity & Unit Price */}
                                        <div className="col-6 col-sm-2 text-sm-center">
                                            <div className="small text-muted mb-1">Price & Qty</div>
                                            <span className="fw-semibold text-dark">
                        ${item.price.toFixed(2)}
                      </span>
                                            <span className="text-muted small ms-1">× {item.quantity}</span>
                                        </div>

                                        {/* Subtotal & Action */}
                                        <div className="col-6 col-sm-3 text-end">
                                            <div className="fw-bold fs-6 mb-2" style={{ color: indigoColor }}>
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="btn btn-sm btn-outline-danger border-0 rounded-circle p-2 lh-1"
                                                title="Remove item"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5a.5.5 0 0 1 .47-.528M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m2.47.5a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L10 5a.5.5 0 0 1 .47-.528" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-3">
                        <Link to="/books-page" className="text-decoration-none small fw-medium" style={{ color: indigoColor }}>
                            &larr; Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h5 className="fw-bold mb-3 text-dark">Order Summary</h5>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Items Subtotal</span>
                            <span className="fw-semibold text-dark">${totalAmount.toFixed(2)}</span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Estimated Tax</span>
                            <span className="text-muted">$0.00</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                            <span className="text-muted">Shipping</span>
                            <span className="badge bg-success-subtle text-success rounded-pill px-2 py-1">
                Free
              </span>
                        </div>

                        <div className="d-flex justify-content-between align-items-baseline mb-4">
                            <span className="fs-5 fw-bold text-dark">Total</span>
                            <span className="fs-4 fw-bold" style={{ color: indigoColor }}>
                ${totalAmount.toFixed(2)}
              </span>
                        </div>

                        <Link to="/login"
                            className="btn w-100 py-3 rounded-3 text-white fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                            style={{ backgroundColor: indigoColor }}
                            onClick={() => console.log("Proceeding to checkout...")}
                        >
                            <span>Checkout</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>

                        <div className="mt-3 text-center">
              <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                🔒 Secure 256-Bit SSL Encrypted Checkout
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
