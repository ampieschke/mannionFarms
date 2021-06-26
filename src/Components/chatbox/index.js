import React, {useState, useEffect} from 'react';
import "./style.css";
import io from 'socket.io-client'


let socket;
const CONNECTION_PORT = "localhost:3000/";


function Chatbox(){
const [message, setMSG] = useState('');
const [msgList, setMsgList] = useState([])
console.log(message)

useEffect(() => {
 socket = io(CONNECTION_PORT);
},);

useEffect(() => {
  socket.on('receive_message', (data) => {
    setMsgList([...msgList, data]);
  });
});

const sendMSG = async () => {
  let msgContent = {
    content:{
      author: "placeholder",
      message: message,
    },
  }

    await socket.emit("send_message", msgContent);
    setMsgList([...msgList, msgContent.content]);
    setMSG('');
    console.log(message)

}

  return (
    <div className = 'chatbox'>
      <div className='messages'>
        {msgList.map((val, key) => {
          return(
            <div className='messageContainer'>
              <div className='messageIndividual'>
                {val.author}: {val.message}
                </div>
              </div>
          )
        })}
      </div>
    <ul id="messages"></ul>
    <form id="form" action="">
      <input type='text' placeholder='Message...' id="input"/><button onClick={sendMSG}>Go!</button>
    </form>

    </div>
  );
}

export default Chatbox;