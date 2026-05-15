import { useState } from "react"

function Navbar({inboxData,setChatMessages}){

     const [inputText, SetinputText] = useState('') 


function saveText(event){

SetinputText(event.target.value)
}

function SendMessage (){
    const  newchatmessages=  [
            ...inboxData,{
                message:inputText,
                sender: 'user',
                id: crypto.randomUUID()
            },
        ]

 setChatMessages(
       newchatmessages
        
)

const response = window.Chatbot.getResponse(inputText)
console.log(response);
SetinputText('')
setChatMessages(
        [
            ...newchatmessages,{
                message:response,
                sender: 'robot',
                id: crypto.randomUUID()
            },
        ],
        
)
}

return(
<>
    
 <input type="text" placeholder="Send a message to the Chatbot" className="border"
 value={inputText} size='30'
 onChange={saveText}
 />
 <button onClick={SendMessage}>Send</button>
  
</  >

)
}

export default Navbar