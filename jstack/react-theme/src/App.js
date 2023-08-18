import React, { Component, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'


// Componente de classse ->

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      theme: 'dark',
    }

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }
  
  handleToggleTheme(){
    this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark'}));
  }
  render(){
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={this.handleToggleTheme} 
          selectedTheme={theme}
        />
      </ThemeProvider>
    )
  }
}


// Componente funcional ->

// export default function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme(){
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme}/>
//     </ThemeProvider>
//   );
// };
