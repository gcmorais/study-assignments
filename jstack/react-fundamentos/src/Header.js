import React from "react";
import PropTypes from 'prop-types';

export function Header(props){
    return (
        <>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                {props.children}
            </div>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
};
Header.defaultProps = {
    title: 'Glhrm Blog',
};