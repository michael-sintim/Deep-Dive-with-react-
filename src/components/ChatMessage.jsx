function ChatMessage({message,sender}){
//     const message = props.message // shortcut but same 
//    const sender =  props.sender
//const {message,sender} = props  // or function ChatMessage({message,sender}) for destructing 


    return   sender === "robot" ? 
    <div>
  {/* hello Chatbot */}
  <img src="robot.jpg" alt="user image"  width='50' />  
  {message}
    </div> : <div>
  {/* user  */}
  
  <img src="user.jpg" alt="user image"  width='50' />  
  {message}
    </div>

}

export default ChatMessage