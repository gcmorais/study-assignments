import React from "react";
import PropTypes from 'prop-types';

export function Article(props){
    return (
        <>
            <article>
                <h3>{props.post.title}</h3>
                <small>{props.post.subtitle}</small>
                <br/>
                Média:{props.likes /2}
            </article>
            <br/>
        </>
    )
}

Article.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};