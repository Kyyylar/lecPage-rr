import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.css';
const Nav = () => {
    return ( 
        <>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact>Strona główna</NavLink>
                    </li>
                    <li>
                        <NavLink to="/teams">Drużyny</NavLink>
                    </li>
                    <li>
                        <NavLink to="/standings">Tabela</NavLink>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default Nav;