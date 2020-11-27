import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App container-red">
          <header className="App-header">
            <h1 className="center">My Blog App</h1>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
