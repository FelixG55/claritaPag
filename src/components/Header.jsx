import React from "react";
import '../assets/css/Header.css'
import { HashLink as Link } from "react-router-hash-link";

function Header () {
    return(
        <React.Fragment>
            {/* Header */}
            <div id ="header" className="header">
                <img id="headerItem5" className="HeaderItem" src="/logo1.png"></img>
                <div id = 'header-items' className="header-items">
                <h5 id="headerItem1" className="headerItem">Inicio</h5>
                <Link smooth to={'#nosotros'} className="nosub">
                <h5 id="headerItem2" className="headerItem">Nosotros</h5>
                </Link>
                <h5 id="headerItem3" className="headerItem">Eventos</h5>
                <h5 id="headerItem4" className="headerItem">Contáctanos</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;