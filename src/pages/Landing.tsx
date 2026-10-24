
import {useCategories, useBooks, useAuthors} from "../book/hook/useApiQueries"; // Adjust the import to where your hooks are saved

import {useMemo} from "react";
import AuthorCard from "./AuthorCard.tsx";
import CategoryCard from "./CategoryCard.tsx";
import {Link} from "react-router-dom";
 // Import the newly created Header component

const INDIGO_COLOR = "#6610f2";

export default function Landing() {
    // Fetching categories and a few books for the promotion section
    const { data: categories, isLoading: isCategoriesLoading } = useCategories();
    const { data: booksPage, isLoading: isBooksLoading } = useBooks(0, 4);
    const { data: authors, isLoading: isAuthorsLoading } = useAuthors();
    const randomAuthors = useMemo(() => {
        if (!authors) return [];
        // Authors array ကို copy ကူးပြီး ကျပန်းဖြစ်အောင် sort လုပ်ပါမယ်
        const shuffled = [...authors].sort(() => 0.5 - Math.random());
        // ပြီးရင် အရှေ့ဆုံး ၄ ယောက်ကိုပဲ ယူပါမယ်
        return shuffled.slice(0, 4);
    }, [authors]);



    return (
        <div className="d-flex flex-column min-vh-100 font-sans-serif">

            {/* 1. NAVBAR SECTION (Imported Component) */}


            {/* 2. HERO SECTION */}
            <header className="py-5 bg-light">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
                                className="d-block mx-lg-auto img-fluid rounded-4 shadow-lg"
                                alt="Library Hero"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold lh-1 mb-3" style={{ color: INDIGO_COLOR }}>
                                Discover Your Next Great Adventure
                            </h1>
                            <p className="lead text-muted mb-4">
                                Explore thousands of books, from thrilling mysteries to heartwarming romances.
                                Join our community of readers and unlock exclusive indigo member deals today.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/books-page"
                                    className="btn btn-lg px-4 text-white shadow-sm"
                                    style={{ backgroundColor: INDIGO_COLOR }}
                                >
                                    Start Reading
                                </Link>
                                <Link to="/books-page"  className="btn btn-outline-secondary btn-lg px-4">
                                    Browse Catalog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. CATEGORIES SECTION */}
            <section id="categories" className="container px-4 py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: INDIGO_COLOR }}>Explore Categories</h2>
                    <p className="text-muted">Find exactly what you're looking for</p>
                </div>

                {isCategoriesLoading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border" style={{ color: INDIGO_COLOR }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {categories?.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                )}
            </section>

            {/* 4. AUTHORS SECTION (အသစ်ထပ်ထည့်ထားသောအပိုင်း) */}
            <section id="authors" className="bg-light py-5">
                <div className="container px-4 py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: INDIGO_COLOR }}>Meet Our Authors</h2>
                        <p className="text-muted">Discover the brilliant minds behind your favorite books</p>
                    </div>

                    {isAuthorsLoading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border" style={{ color: INDIGO_COLOR }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center">
                            {/* ဖော်ပြတဲ့အခါ နေရာအများကြီးမယူအောင် အစ ၄ ယောက်လောက်ပဲ ပြဖို့ slice လုပ်ထားပါတယ်။ အကုန်ပြချင်ရင် slice ဖယ်လိုက်ပါ */}
                            {randomAuthors.map((author) => (
                                   <AuthorCard author={author} key={author.id}/>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* 4. PROMOTION SECTION */}
            <section id="promotions" className="bg-light py-5">
                <div className="container py-4">
                    <div className="p-5 text-white rounded-4 shadow" style={{ backgroundColor: INDIGO_COLOR }}>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="badge bg-warning text-dark mb-2 fs-6 px-3 py-2">Flash Sale</span>
                                <h2 className="display-5 fw-bold mb-3">Summer Reading Promotion</h2>
                                <p className="lead mb-4">
                                    Get up to 50% off on selected award-winning novels. Hurry, offer ends this weekend!
                                </p>
                                <button className="btn btn-light btn-lg text-dark fw-bold px-5 rounded-pill shadow-sm">
                                    Claim Discount
                                </button>
                            </div>
                            <div className="col-lg-5 mt-4 mt-lg-0 d-none d-lg-block">
                                <div className="row g-2">
                                    {!isBooksLoading && booksPage?.content.slice(0, 2).map((book) => (
                                        <div className="col-6" key={book.id}>
                                            <img
                                                src={`/images/books/${book.coverImage}`}
                                                alt={book.title}
                                                className="img-fluid rounded shadow"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. USER FEEDBACK SECTION */}
            <section id="feedback" className="container px-4 py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: INDIGO_COLOR }}>What Our Readers Say</h2>
                    <p className="text-muted">Join over 10,000 happy book lovers</p>
                </div>

                <div className="row g-4">
                    {[1, 2, 3].map((item) => (
                        <div className="col-md-4" key={item}>
                            <div className="card h-100 shadow-sm border-0 p-3">
                                <div className="card-body">
                                    <div className="text-warning mb-3">
                                        {'★'.repeat(5)}
                                    </div>
                                    <p className="card-text fst-italic text-muted">
                                        "This platform completely changed how I find new books. The recommendations are spot on, and the indigo theme is so easy on the eyes!"
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img
                                            src={`https://i.pravatar.cc/150?img=${item + 10}`}
                                            className="rounded-circle me-3"
                                            alt="User"
                                            width="50"
                                            height="50"
                                        />
                                        <div>
                                            <h6 className="mb-0 fw-bold">Alex Johnson</h6>
                                            <small className="text-muted">Avid Reader</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. NEWSLETTER SECTION */}
            <section className="py-5 mt-auto" style={{ backgroundColor: INDIGO_COLOR }}>
                <div className="container py-4 text-center text-white">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3">Subscribe to Our Newsletter</h3>
                            <p className="mb-4 text-white-50">
                                Get the latest book releases, author interviews, and exclusive discounts delivered straight to your inbox.
                            </p>
                            <form className="d-flex flex-column flex-sm-row gap-2">
                                <input
                                    type="email"
                                    className="form-control form-control-lg border-0 shadow-sm"
                                    placeholder="Enter your email address"
                                    required
                                />
                                <button type="submit" className="btn btn-dark btn-lg shadow-sm px-4">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};
