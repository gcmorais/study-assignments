import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
    return(
        <>
            <article>
                <strong>{props.post.title}</strong><br/>
                <small>{props.post.subtitle}</small>
                <br />
                Valor: {props.media /2}
            </article>
            <br />
        </>
    );
}

// TIPAGEM 
Post.propTypes = {
    media: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;