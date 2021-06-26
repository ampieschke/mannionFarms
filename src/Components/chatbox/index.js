import React from 'react';
import "./style.css";
import io from 'socket.io-client'

// let socket;


function Chatbox() {

  var socket = io();
  var messages = document.getElementById('messages')
  var form = document.getElementById('form');
  var input = document.getElementById('input');

    function handleSubmit(e) {
    e.preventDefault();
    if (input.value) {
      console.log(input.value)
      // socket.emit('chat message', input.value);
      input.value = '';
    }
  };

  socket.on('chat message', function(msg){
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    })

  return (
    <div className = 'chatbox'>

    <ul id="messages"></ul>
    <form onSubmit={handleSubmit} id="form" action="">
      <input id="input"/><button>Send</button>
    </form>

    </div>
  );
}

export default Chatbox;