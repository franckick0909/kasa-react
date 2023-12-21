import LOGO from '../assets/images/LOGO.svg';
import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            <img src={LOGO} alt="logo" />
        </div>
    );
};

export default Logo;