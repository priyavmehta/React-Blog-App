import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar/>
            <Dashboard/>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
