import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="app">
          <Nav/>
          <Main/>
          <Footer/>
        </div>
      </Router>
     );
  }
}
 
export default App;

