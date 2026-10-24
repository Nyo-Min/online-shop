import {createContext} from "react";


export interface AuthContextType {
    isAuthenticated: () => boolean;
    setLoggedInUserName: (username: string) => void;
    getLoggedInUserName: () => string;
    setToken: (token: string) => void;
}

export const AuthContext =
    createContext<AuthContextType | null>(null);
