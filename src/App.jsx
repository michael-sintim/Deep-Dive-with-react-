import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import './index.css'
import ChatMessage from './components/ChatMessage'
import ChatMessages from './components/ChatMessages';
import { useState } from 'react';
import Button from './components/button';
function App() {

  const [count,setCount] = useState(0)
  function Counter(){
    setCount(count+1)
    console.log('clicked')
  };
  const [chatMessages,setChatMessages] = useState([{ // shortcut  const  [ChatMessages,setChatMessages]= mainMessages
    
    message:"hello chatbot" ,
    sender:'user',
    id:"id1"
  },{
    message:"hello how can i help you " ,
    sender:'robot',
    id:"id2"
  },{
    message:"Can you get me today's date" ,
    sender:'user',
    id:"id3"
  },{
    message:"Today is september 27th" ,
    sender:'robot',
    id:"id4"
  },
])

  return (

  <BrowserRouter> 
  <Routes>
    <Route path='/' element={
      <>
      <Navbar 
      inboxData={chatMessages}
      setChatMessages={setChatMessages}
      /> 
      <ChatMessages
      inboxData={chatMessages}
      setChatMessages={setChatMessages}
       />
      <Button/> 
      <Button/> 

      {/* <ChatMessage  message="hello chatbot" sender='user'/>
      <ChatMessage  message="hello how can i help you " sender='robot'/>
      <ChatMessage  message="Can you get me today's date " sender='user'/>
      <ChatMessage  message="Today is september 27th" sender='robot'/> */}
      </>}
    
      />

  </Routes>
  </BrowserRouter>
  )
}

export default App
