import { useState } from "react"; 


const SYSTEM_MESSAGE = "You are an Eduqbot, an AI Assistant created using state of the art ML models and APIs";

export default function Home() {
 

  const [apiKey, setApiKey] = useState("");
  
  const [userMessage, setUserMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are Eduqbot, a helpful AI developed and powered by state-of-the-art machine learning models.",
    },
  ]);
  const API_URL = "https://api.openai.com/v1/chat/completions";
  /*console.log ("apiKey", apiKey);*/
 
  
  async function sendRequest () {     
  

    const newMessage = { role: "user", content: "userMessage" };
    const newMessages = [
      ...messages,
      newMessage
    ] 
    setMessages(newMessages);
    setUserMessage("");
  
    const response = await fetch (API_URL, {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer "+ apiKey,
      },
      body: JSON.stringify ({
        model:"gpt-3.5-turbo",
        messages: newMessages,
      }),
    });

    const responseJson = await response.json ();   
 
   const newBotMessage = responseJson.choices[0].message;

   const newMessages2 = [...newMessages, newBotMessage];
   setMessages(newMessages2);

    console.log("responseJson",responseJson);

    //setBotMessages(responseJson.choices[0].message.content);
   
      } 

return <div className="flex flex-col h-screen">
    <nav className="shadow px-4 py-4 flex flex-row justify-between items-center"> 
      <div className="text-xl font-bold text-indigo-700">  Eduqbot </div>
      <div> 
        <input type="password" 
        className="border rounded p-1" 
        placeholder="Paste your API Key here"
        onChange={(e) => setApiKey (e.target.value)} 
        value = { apiKey }
        />
      </div>
    </nav>

    <div className="flex-1 overflow-y-scroll">
        <div className= "max-w-screen-md mx-auto w-full text-indigo-800">

          {messages.filter(message => message.role !== "system").map((message ,idx) => (
            <div key={idx} className="my-3">

              <div className="font-bold">{message.role === "user" ? "you" : "Assistant Eduqbot here!"}</div>
              <div className="font-l">{message.content}</div>
            </div>)
          )}
        </div>
        </div>
       


        {/* Input box */}
        <div>
        
        <div className="max-w-screen-md mx-auto w-full flex px-4 pb-4">
          <textarea
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="border text-lg rounded-md flex-1" rows={1} />
           <button onClick={sendRequest} 
           className="w-40 bordered rounded bg-blue-500 hover:bg-indigo-700 text-white p-2">Send</button>
                   
</div>
        </div>
         
    </div>
 
}




 



