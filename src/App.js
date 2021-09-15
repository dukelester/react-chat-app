import logo from './logo.svg';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <ChatEngine

      height = "100vh"
      projectID ="491e672e-aa57-401f-873a-7600558b1025"
      userName = "lester"
      userSecret = "Chat2021"

      renderChatFeeds = {(chatProps) =>  <ChatFeed {...chatProps}/>}


      />

    </div>
  );
}

export default App;
