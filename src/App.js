import "./App.css";
import React, {useState} from 'react';
// import Home from "./pages/home";
import Navbar from "./Components/navbar";
import Jumbo from "./Components/jumbo";
import Chatbox from "./Components/chatbox";


function App() {
  const [loadClient, setLoadChatbox] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Jumbo />
      {/* <Chatbox /> */}
      {/* <Home /> */}
      <button onClick={() => setLoadChatbox(prevState => !prevState)}>STOP CLIENT</button>
      {loadClient ? <Chatbox /> : null}
    </div>
  );
}

export default App;
