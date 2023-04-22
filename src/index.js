import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/fonts.css'
import App from './App';
import theme from './mui/theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clff1si8q1l7101ufga8vcd0y/master",

  cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>

);

