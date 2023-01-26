import React from 'react';
import PropTypes from 'prop-types';

function Post({ media, postagem, onRemove }){
    return(
        <>
            <article>
                <strong>
                    {postagem.title}
                    <button onClick={() => onRemove(postagem.id)}>Remover</button>
                </strong>
                <br/>
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
    onRemove: PropTypes.func.isRequired,
    postagem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;