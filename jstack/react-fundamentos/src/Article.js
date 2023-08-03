import React from "react";
import PropTypes from 'prop-types';

export function Article(props){
    return (
        <>
            <article>
                
                <h3>{props.post.title}
                <button onClick={() => props.onRemove(props.post.id)} name="button">Remover</button>
                </h3>
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
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};