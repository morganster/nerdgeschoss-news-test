import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({children}) => {
    return (<nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>NerdgesChoss News</span>
        <span>{children}</span>
    </nav>);
};

NavBar.propTypes = {
    children: PropTypes.node,
};

export default NavBar;
