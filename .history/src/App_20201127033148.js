import React, { Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import BlogDetails from './components/blogs/BlogDetails';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar/>
            <Switch>
              <Route exact path = "/" component = {Dashboard}/>
              <Route path = "/projectdetails/:id" component = {BlogDetails}/>
              <Route path = "/login" component = {SignIn}/>
              <Route path = '/register' component = {SignUp} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
