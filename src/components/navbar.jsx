import { useState , useEffect} from "react"

function Navbar({inboxData,setChatMessages,setIsThinking}){

     const [inputText, SetinputText] = useState('') 


    const hasMessages = inboxData.length > 0

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

SetinputText('')
setIsThinking(true)


setTimeout(

    () => {
const response = window.Chatbot.getResponse(inputText)
setIsThinking(false)

setChatMessages(
        [
            ...newchatmessages,{
                message:response,
                sender: 'robot',
                id: crypto.randomUUID()
            },
        ],
        
)
    },300
)
}

  const handlekeydown = (e) => {
    if (e.key === 'Enter' || e.code === "Enter"){
      e.preventDefault();
      SendMessage()
    }
  }

  const [isSwapped, setIsSwapped] = useState(false)
  const handleSwap = (e) => {
    e.preventDefault()
    setIsSwapped(!isSwapped)
  }

return(
    <>
<div className={`fixed left-0 w-full flex justify-center p-5 z-50 transition-all duration-500
    ${isSwapped?'bottom-0':'top-0'}`}>
    
 <input type="text" placeholder="Send a message to the Chatbot"
 value={inputText} size='30' onKeyDown={handlekeydown}
 onChange={saveText}
 className='w-[500px] border rounded-lg h-10 text-left p-5 mx-4'
 
 />
 
 <button onClick={SendMessage} className="bg-blue-600 p-2 rounded-lg text-white px-5 hover:cursor-pointer">Send</button>
  
</  div>
{!hasMessages &&
<div className="flex justify-center pt-16">
    
      <p className="text-gray-500">Welcome to the chatbot project! Send a message using the textbox above</p>
</div>}
<div className={`fixed left-0 w-full flex justify-center transition-all duration-700 z-50 p-4 ${
          isSwapped ? 'top-0' : 'bottom-0'
        }`}>
    <a href="#" onClick={handleSwap}>{isSwapped?'Move to bottom':"Move to top"} </a>
</div>

</>
)
}

export default Navbar