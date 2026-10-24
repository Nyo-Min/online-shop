import { type SubmitHandler, useForm } from "react-hook-form";
import type { LoginDto } from "../dto/LoginDto.ts";
import { login } from "../api/auth.api.ts";
import { useAuthContext } from "../provider/AuthContextProvider.tsx";
import { Link, useNavigate } from "react-router-dom";
import { createOrderApiCall } from "../../order/api/OrderService.ts";
import { useCartContext } from "../../cart/CartContextProvider.tsx";
const INDIGO_THEME_COLOR = "#6200ea";
export default function LoginPage() {
    const { register, handleSubmit, reset } = useForm<LoginDto>();
    const { setToken, setLoggedInUserName } = useAuthContext();
    const navigator = useNavigate();
    const { cartItems } = useCartContext();

    const onSubmitHandler: SubmitHandler<LoginDto> = async (data) => {
        try {
            const returnString = await login(data);
            console.log(returnString);
            const token = "Basic " + btoa(`${data.usernameEmail}:${data.password}`);
            setLoggedInUserName(data.usernameEmail);
            setToken(token);
            reset();
            const orderResponse = await createOrderApiCall(cartItems);
            console.log(orderResponse);
            navigator("/");
            window.location.reload();
        } catch (e) {
            console.log("Login failed");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
            <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5" style={{ maxWidth: "420px", width: "100%" }}>

                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-dark mb-1">Welcome Back</h2>
                    <p className="text-muted small">Please sign in to continue</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="mb-3">
                        <label htmlFor="usernameEmail" className="form-label small fw-semibold text-secondary">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg fs-6"
                            id="usernameEmail"
                            placeholder="name@example.com"
                            autoComplete="username"
                            {...register("usernameEmail", { required: true })}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label small fw-semibold text-secondary">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg fs-6"
                            id="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                    </div>

                    <button type="submit" style={{backgroundColor: INDIGO_THEME_COLOR, color: "white"}} className="btn  btn-lg w-100 fs-6 fw-semibold mb-3">
                        Sign In
                    </button>

                    {/* Footer Link */}
                    <div className="text-center">
                        <span className="text-muted small">Don't have an account? </span>
                        <Link to="/register" className="text-decoration-none fw-semibold small">
                            Register
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
}