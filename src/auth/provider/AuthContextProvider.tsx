import {type ReactNode, useContext} from "react";
import {AuthContext, type AuthContextType} from "./AuthContext.tsx";

export default function AuthContextProvider({children}:{children:ReactNode}) {
    const getLoggedInUserName = () => {
        return localStorage.getItem("username") || "";
    }
    const setLoggedInUserName = (username: string) => {
        localStorage.setItem("username", username);
    }
    const isAuthenticated = () => {
        return !!getLoggedInUserName();
    }
    const setToken = (token: string) => {
        localStorage.setItem("token", token);
    }

    const value:AuthContextType={
        isAuthenticated,
        setLoggedInUserName,
        getLoggedInUserName,
        setToken
    }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}
