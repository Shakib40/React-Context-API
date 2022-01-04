import {useContext ,useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';

export const Form = () => {
    const {token} = useContext(AuthContext);    
    
    return (
        <div>
            <h1>Token is : {token}</h1>
        </div>
    )
};