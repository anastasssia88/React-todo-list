import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>All Tasks</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  }

const headerStyle = {
    backgroundImage: 'linear-gradient(to right, #3780E7 , #8F93FF)',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
  }

export default Header;