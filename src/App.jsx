import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import './index.css'
import ChatMessages from './components/ChatMessages';
import { useState ,useEffect} from 'react';
import Button from './components/button';
function App() {

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

const [count,setCount] = useState(0)
  function Counter(){
    setCount(count+1)
    console.log('clicked')
  }
   
    function Reset(){
        setCount(0)
        console.log('reset')
  };

  const [inputText,SetinputText] = useState('')
  function saveText(e){
    SetinputText(e.target.value)
  }

  function Reset1(){
       SetinputText('')
       console.log('reset')
 };

 
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
{/*        
      <Button x={Counter} y={count} /> 
      <Button x={Counter} y={count}/> 
       <button onClick={Reset} className="border bg-amber-400 ">
       Reset
      </button>

      <input type="text" className='border' value= {inputText}  onChange={saveText}/>
      <p>Hello {inputText}</p>
      <button onClick={Reset1} className="border bg-amber-400 ">
       Reset
      </button>
      <button onClick={function Alice(){SetinputText('Alice');} } className="border bg-amber-400 ">
       example
      </button> */}

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
