import {useContext ,useState} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';


export const Navbar = () => {

    const {theme , toogleTheme} = useContext(ThemeContext);
    const{token} = useContext(AuthContext);
    
    return (
        <div>
            Theme is :{theme} in navbar
            TOken is :{token}
            <h1>Navbar</h1>
        </div>
    )
}
