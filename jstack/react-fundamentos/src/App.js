import React, { useState } from "react";
import { Article } from "./Article";
import { Header } from "./Header";



export function App(){

    // Trabalhando com States 
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Title 01', subtitle: 'Sub 01', likes: 20 },
        { id: Math.random(), title: 'Title 02', subtitle: 'Sub 02', likes: 10 },
        { id: Math.random(), title: 'Title 03', subtitle: 'Sub 03', likes: 50 },
    ]);

    function handleRefresh(){
        setPosts((prevState) => [
            ...prevState,
            { 
                id: Math.random(),
                title: `Title 0${prevState.length + 1}`,
                subtitle: `Sub 0${prevState.length + 1}`,
                likes: 20,
            }
        ]);
    }
    // função de callback via props
    function handleRemovePost(postId){
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
    }
    // Fim States
    
    return (
        <>
            <Header
                subtitle = "Tech news today"
            >
                <button onClick={handleRefresh} name="button">Home</button>
            </Header>
            
            // rederização de listas
            {posts.map(post => (
                <Article
                    key={post.id}
                    likes={post.likes}
                    onRemove={handleRemovePost}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                        id: post.id,
                    }}
                />
            ))}
        </>
    );
}