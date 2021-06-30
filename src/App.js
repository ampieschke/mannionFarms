import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ContentLog from "./pages/contentLog";
import History from './pages/history';
import Navbar from "./Components/navbar";
// import Chatbox from "./Components/chatbox";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/content' component={ContentLog} />
  <Route exact path='/history' component={History} />
</Switch>
</Router>
{/* <Chatbox /> */}
    </div>
  );
}

export default App;
