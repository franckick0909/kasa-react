import logoFooter from '../assets/images/LOGO.png';
import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <img src={logoFooter} alt="logo" />
                <p>© 2020 Kasa. All  <span>   rights reserved</span></p>

            </footer>
        </>
    );
};

export default Footer;