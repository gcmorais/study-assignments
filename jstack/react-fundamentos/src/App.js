import React from "react";
import { Article } from "./Article";
import { Header } from "./Header";

const posts =[
    { title: 'Title 01', subtitle: 'Sub 01', likes: 20 },
    { title: 'Title 02', subtitle: 'Sub 02', likes: 10 },
    { title: 'Title 03', subtitle: 'Sub 03', likes: 50 },
]

export function App(){
    return (
        <>
            <Header
                subtitle = "Tech news today"
            >
                <button name="button">Home</button>
            </Header>
            {posts.map(post => (
                <Article
                    key={post.title}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle,
                    }}
                />
            ))}
        </>
    );
}