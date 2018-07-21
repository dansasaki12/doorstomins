import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Auth from './auth';
// import Table from './Components/Table/Table';

const auth = new Auth();
auth.login();    





class App extends Component {
  render() {
    return (
      <Home/>
      
    )
  }
 
}

export default App;





