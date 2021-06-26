import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ContentLog from "./pages/contentLog";
import Navbar from "./Components/navbar";
import Chatbox from "./Components/chatbox";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Chatbox />
      <Home />
      <Router>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/content' component={ContentLog} />
</Switch>
</Router>
    </div>
  );
}

export default App;
