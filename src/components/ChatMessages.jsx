import React from "react";
import { useState } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ inboxData, setChatMessages }) {
  const ChatMessageComponents = inboxData.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  function SendMessage() {
    // console.log("send message")
    // ChatMessages.push({
    //     message: 'test',
    //     sender: 'user',
    //     id : crypto.randomUUID()
    // });
    setChatMessages([
      ...inboxData,
      // {
      //   message: "txt",
      //   sender: "poo",
      //   id: crypto.randomUUID(),
      // },
    ]);
 
    
  }

  return (
    <>
      <button onClick={SendMessage} className="border bg-amber-400 ">
        Send Message
      </button>
      {ChatMessageComponents}
    </>
  );
}

export default ChatMessages;
