import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>My Blog App</h1>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
