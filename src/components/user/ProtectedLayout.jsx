import React from 'react';
import PropTypes from 'prop-types';
const ProtectedLayout = ({ children }) => {
    return (
        <div>
            <header>Protected Header</header>
            <main>{children}</main>
            <footer>Protected Footer</footer>
        </div>
    );
};

export default ProtectedLayout;

ProtectedLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };