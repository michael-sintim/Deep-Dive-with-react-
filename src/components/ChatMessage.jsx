function ChatMessage({message,sender}){
//     const message = props.message // shortcut but same 
//    const sender =  props.sender
//const {message,sender} = props  // or function ChatMessage({message,sender}) for destructing 


    return   sender === "robot" ? 
    <div className="flex justify-start items-center">
  {/* hello Chatbot */}
  <img src="robot.jpg" alt="user image"  width='50' className="rounded-3xl mx-3"/>  
  {message}
    </div> : <div className="flex justify-end items-center ">
  {/* user  */}
  
  {message}
  <img src="user.jpg" alt="user image"  width='50'className="mx-3 " />  
    </div>

}

export default ChatMessage