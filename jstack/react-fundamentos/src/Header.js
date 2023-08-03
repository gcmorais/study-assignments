import React from "react";
import PropTypes from 'prop-types';

// Forma desestruturada das props abaixo 
export function Header({title, subtitle, children}){
    return (
        <>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                {children}
            </div>
        </>
    )
}

// tipagem das props
// adicionar lib pop-types
Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
};
Header.defaultProps = {
    title: 'Glhrm Blog',
};