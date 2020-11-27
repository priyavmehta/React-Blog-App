import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <header className="App-header">
            <h1>My Blog App</h1>
            <Navbar/>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
