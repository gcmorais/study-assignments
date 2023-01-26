import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [ posts, setPosts ] = useState(
    [
      { id: Math.random(), title: 'Titulo #1', subtitle: 'Sub #1', likes: 10 }
    ]
  );
  // no useState, temos um array com 2 posições: na primeira posiçao será o valor que queremos armazenar
  // na segunda posição a função que vai fazer a alteração dos dados (fazer a renderização novamente)

  function handleRefresh(){
    setPosts((prevState) => [ 
      ...prevState, 
      { 
        id: Math.random(),
        title: `Titulo #${prevState.length + 1}`, 
        subtitle: `subtitle #${prevState.length + 1}`, 
        likes: 50 
      }
    ])
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ))
  }
  
    return(
        <>
          <Header title = "Uva é muito ruim">
            <h2>
              Uma descrição bem legal
              <button onClick={handleRefresh}>Refresh</button>
            </h2>
          </Header>

          {posts.map(post => (
            <Post 
              key={post.title}
              media={post.likes}
              onRemove= {handleRemovePost}
              postagem={{
                id: post.id,
                title: post.title,
                subtitle: post.subtitle,
              }}
            />
          ))}

        </>
    );
}

export default App;