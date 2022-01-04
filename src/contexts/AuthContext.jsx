import {createContext,useState} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ( { children } ) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token , setToken] = useState("aadsadads111");
    const [user, setUser] = useState("");


    const toogleAuth = () => {

    }
    
    return (
        <AuthContext.Provider value={isAuth, token, user, toogleAuth}>
            {children}
        </AuthContext.Provider>
    )
};