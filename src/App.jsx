import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import DetailsMain from './detailsComponents/detailsMain';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path ='/ReactProj' element = {<Home/>}/>
          <Route path = '/ReactProj/details' element = {<DetailsMain/>} />

          </Routes>
 
      </Router>
    </div>
  );
}

export default App;
