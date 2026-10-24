



export default function Footer() {
    return (

    <footer className="bg-dark text-light pt-5 pb-2 mt-auto font-sans-serif">
        <div className="container">
            <div className="row text-center text-md-start">

                {/* Column 1: Brand & About */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">
                        <i className="bi bi-book-half me-2"></i>IndigoBooks
                    </h5>
                    <p className="text-white-50">
                        Discover your next great adventure with our vast collection of books.
                        We bring the joy of reading right to your doorstep.
                    </p>
                    {/* Social Icons */}
                    <div className="mt-4">
                        <a href="#" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-light me-3 fs-5"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-light me-3 fs-5"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-light me-3 fs-5"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">About Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Promotions</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Reviews</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Categories */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Fiction</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Non-Fiction</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Science & Tech</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-white-50 text-decoration-none">Romance</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                    <p className="text-white-50 mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                        <i className="bi bi-house-door-fill me-3 fs-5"></i> Yangon, Myanmar
                    </p>
                    <p className="text-white-50 mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                        <i className="bi bi-envelope-fill me-3 fs-5"></i> info@indigobooks.com
                    </p>
                    <p className="text-white-50 mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                        <i className="bi bi-telephone-fill me-3 fs-5"></i> +95 9 123 456 789
                    </p>
                </div>

            </div>
        </div>

        {/* Copyright Bottom Row */}
        <div className="text-center p-3 border-top border-secondary mt-3">
        <span className="text-white-50 small">
          © {new Date().getFullYear()} IndigoBooks. All Rights Reserved. Designed with ❤️
        </span>
        </div>
    </footer>
);
};