import type {ReactNode} from "react";
import {useAuthContext} from "../provider/AuthContextProvider.tsx";
import LoginPage from "../page/LoginPage.tsx";


export default function AuthGuard({children}: {children:ReactNode}) {
    const { isAuthenticated } = useAuthContext();
    if(!isAuthenticated()){
        return <LoginPage />
    }
    return (
        <>
            {children}
        </>
    );
}
