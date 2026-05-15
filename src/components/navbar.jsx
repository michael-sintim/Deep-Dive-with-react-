import { useState , useEffect} from "react"

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

  const handlekeydown = (e) => {
    if (e.key === 'Enter' || e.code === "Enter"){
      e.preventDefault();
      SendMessage()
    }
  }



return(
    <>
<div className="flex justify-center m-5">

 <input type="text" placeholder="Send a message to the Chatbot" className="border"
 value={inputText} size='30' onKeyDown={handlekeydown}
 onChange={saveText}
 className='w-[500px] border rounded-lg h-10 text-left p-5 mx-4'
 
 />
 <button onClick={SendMessage} className="bg-blue-600 p-2 rounded-lg text-white px-5 hover:cursor-pointer">Send</button>
  
</  div>
<div className="flex justify-center">
    
      <p className="text-gray-500">Welcome to the chatbot project! Send a message using the textbox above</p>
</div>
</>
)
}

export default Navbar