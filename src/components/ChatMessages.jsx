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
  })

  return (
  
    <>
{/* 
      <button onClick={Counter} className="border bg-amber-400 ">
        Clicked {count} times
      </button> */}
      {ChatMessageComponents}
    </>
  );
}

export default ChatMessages;
