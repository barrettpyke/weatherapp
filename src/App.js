import React from 'react';
import Header from './Components/Header';
import WidgetContainer from './Components/WidgetContainer';
import './style.css';
import Theme from './Components/Theme';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {

  return (
    <div id="app">
      <ThemeProvider theme={Theme}>
        <Header />
        <WidgetContainer />
      </ThemeProvider>
    </div>
  )
}

export default App;
