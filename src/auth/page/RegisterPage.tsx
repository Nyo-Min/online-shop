import {type SubmitHandler, useForm} from "react-hook-form";
import type {RegisterDto} from "../dto/RegisterDto.ts";
import {Link, useNavigate} from "react-router-dom";
import {registerApiCall} from "../api/auth.api.ts";

export default function RegisterPage() {
    const {register,handleSubmit,reset} =useForm<RegisterDto>();
    const navigator =useNavigate();

    const onSubmitHandler:SubmitHandler<RegisterDto> = async (data) =>{
        try{
            const response
                = await registerApiCall(data);
            console.log(response);
            reset();
            navigator("/login");
            window.location.reload();
        }catch (e){
            console.log("Register failed");
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="offset-3 col-md-6">
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control"
                                       id="username"
                                {...register("username")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control"
                                       id="email"
                                {...register("email")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control"
                                       id="password"
                                {...register("password")} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Register</button>
                            <Link to="/login" className="btn btn-link">
                                Already have an account? Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
