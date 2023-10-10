import GlobalStyles from '../../assets/styles/global';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import {Container } from './styles';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import isPropValid from '@emotion/is-prop-valid';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles/>
          <ToastContainer/>
            <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </StyleSheetManager>


  );
}

export default App;
