import React from 'react';
import PropTypes from 'prop-types';

function Post({ media, postagem }){
    return(
        <>
            <article>
                <strong>{postagem.title}</strong><br/>
                <small>{postagem.subtitle}</small>
                <br />
                <p>Likes: {media /2}</p>
            </article>
            <br />
        </>
    );
}

// TIPAGEM 
Post.propTypes = {
    media: PropTypes.number.isRequired,
    postagem: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;