import React from "react";
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Blog App</h1>
        </header>
    );
};

export default Header;