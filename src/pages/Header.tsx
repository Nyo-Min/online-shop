

// Bootstrap's official indigo color
import {Link} from "react-router-dom";

import {BiBook} from "react-icons/bi";
import {BsCart} from "react-icons/bs";
import {useCartContext} from "../cart/CartContextProvider.tsx";
import {useAuthContext} from "../auth/provider/AuthContextProvider.tsx";
import {logout} from "../auth/api/auth.api.ts";

const INDIGO_COLOR = "#6610f2";

export default function Header ()  {
    const {cartItems} = useCartContext();

    const {isAuthenticated} = useAuthContext();

    const logoutHandler =  () =>{
        logout();
        window.location.reload();
    }
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
            style={{ backgroundColor: INDIGO_COLOR }}
        >
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold fs-3">
                    <BiBook size={25} className="me-2"/>
                    IndigoBooks
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-semibold">
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link"><BsCart size={25} className="me-2"/>
                                <span className="me-2">{cartItems.length}</span>
                            </Link>
                        </li>
                        {
                            isAuthenticated() &&(
                                <li className="nav-item">
                                    <Link to="/login"
                                          onClick={logoutHandler}
                                          className="nav-link active" >Logout</Link>
                                </li>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <li className="nav-item">
                                    <Link to="/ordered" className="nav-link active">MyOwn</Link>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#categories">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#promotions">Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#feedback">Reviews</a>
                        </li>
                    </ul>
                    <div className="ms-lg-3 mt-3 mt-lg-0">
                        <button className="btn btn-outline-light me-2">Sign In</button>
                        <button className="btn btn-light" style={{ color: INDIGO_COLOR }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};