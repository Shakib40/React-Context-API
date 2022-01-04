import {ThemeContext} from '../contexts/ThemeContext';
import {useContext ,useState} from 'react';


export const Navbar = () => {
    const {theme , toogleTheme} = useContext(ThemeContext);
    
    return (
        <div>
            Theme is :{theme} in navbar
            <h1>Navbar</h1>
        </div>
    )
}
