import React from "react";
import {Link} from "react-router-dom";
import {HeaderContainer} from "./HeaderContainer";

const Header = () => (
    <HeaderContainer>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fitter">Fitter</Link></li>
        </ul>
    </HeaderContainer>
);

export {
    Header
};