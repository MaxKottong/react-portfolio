import React, { useState } from 'react';
import Nav from '../Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/header.css';

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <div>
            <h1 className="header">
                <a data-testid="link" href="/">
                    Lernantino
                </a>
            </h1>
            <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            >
            </Nav>
        </div>
    );
};

export default Header;