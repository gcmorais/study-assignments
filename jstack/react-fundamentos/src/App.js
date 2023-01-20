import React from 'react';
import Post from './Post';
import Header from './Header';

function App() {
    return(
        <>
          <Header title = "Uva é muito ruim">
            <h2>Uma descrição bem legal</h2>  
          </Header>
         
          <Post 
            media = {20}
            post = {{
              title: "uma verdade 01",
              subtitle: "goiaba é bom demais 01",
            }}
          />
          <Post 
            media = {40}
            post = {{
              title: "uma verdade 02",
              subtitle: "goiaba é bom demais 02",
            }}
          />
          <Post 
            media={60}
            post = {{
              title: "uma verdade 03",
              subtitle: "goiaba é bom demais 03",
            }}
          />
        </>
    );
}

export default App;