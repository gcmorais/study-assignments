import React from 'react';

import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';

export default function Header({onToggleTheme, selectedTheme}){
  const history = useHistory();

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <button
        type="button" 
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌙'}
      </button>
      
    </Container>
  );
}