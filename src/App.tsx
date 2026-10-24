import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Header from "./pages/Header.tsx";
import Footer from "./pages/Footer.tsx";
import {BookContextProvider} from "./book/provider/BookContextProvider.tsx";
import BookList from "./pages/BookList.tsx";
import BookPage from "./pages/BookPage.tsx";
import BookDetails from "./pages/BookDetails.tsx";
import CartContextProvider from "./cart/CartContextProvider.tsx";
import CartView from "./pages/CartView.tsx";
import AuthContextProvider from "./auth/provider/AuthContextProvider.tsx";
import LoginPage from "./auth/page/LoginPage.tsx";
import RegisterPage from "./auth/page/RegisterPage.tsx";
import OrderedBook from "./order/page/OrderedBook.tsx";
import AuthGuard from "./auth/guard/AuthGuard.tsx";


export default function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <CartContextProvider>
                <BookContextProvider>
                    <AuthContextProvider>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Landing/>}/>
                            <Route path="/books" element={< BookList/>} />
                            <Route path="/books-page" element={<BookPage />} />
                            <Route path="/book-details/:id" element={<BookDetails />}/>
                            <Route path="/cart" element={<CartView />}/>
                            <Route path="/login" element={<LoginPage />}/>
                            <Route path="/register" element={<RegisterPage />}/>
                            <Route path="/ordered" element={
                                <AuthGuard>
                                    <OrderedBook />
                                </AuthGuard>
                            }/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                    </AuthContextProvider>
                </BookContextProvider>
                </CartContextProvider>
            </QueryClientProvider>
        </>
    );
}
