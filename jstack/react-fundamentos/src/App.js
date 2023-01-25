import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [ posts, setPosts ] = useState([
    { title: 'Titulo #1', subtitle: 'Sub #1', likes: 10 }
  ]);

  //  posts vai armazenar a informaçao que o componente vai renderizar novamente.
  //  setPosts é a função que vai fazer a alteração dos dados.

  function handleRefresh(){
    setPosts((prevState) => [ 
      ...prevState, 
      { 
        title: `Titulo #${prevState.length + 1}`, 
        subtitle: `subtitle #${prevState.length + 1}`, 
        likes: 50 
      }
    ])
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
              postagem={{
                title: post.title,
                subtitle: post.subtitle,
              }}
            />
          ))}

        </>
    );
}

export default App;