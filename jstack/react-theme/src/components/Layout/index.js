import React from 'react';


import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes'
import { BrowserRouter } from 'react-router-dom';

export default function Layout({onToggleTheme, selectedTheme}) {
  
  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      <Routes/>
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
    </BrowserRouter>
  );
}
