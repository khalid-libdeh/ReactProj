import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import DetailsMain from './detailsComponents/detailsMain';
import { createBrowserHistory } from 'history';
import { ThemeProvider, createTheme } from '@mui/material';

const history = createBrowserHistory();

const themes =
{
  light: {
    primary: {
      main: '#fafafa',
    },
    
  },
  dark: {
    primary: {
      main: '#111517',
      
    },
    
  }
};

function App() {
  let theme = createTheme(themes.light);
  let currentTheme = 'light';
  function changeMode() {
    if(currentTheme === 'light'){
      theme = createTheme(themes.dark)
      currentTheme = 'dark'
      console.log('yes')
    }
    else{
      theme = createTheme(themes.light) 
      currentTheme = 'light' 
      console.log('no')
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Router>

          <Routes>
            <Route path='/ReactProj' element={<Home onModeChange={changeMode} />} />
            <Route path='/ReactProj/details' element={<DetailsMain />} />

          </Routes>

        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
