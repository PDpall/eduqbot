
import { useState } from "react";


const SYSTEM_MESSAGE = "You are an AI assistant eduqbot";



export default function Home() {
  const [apiKey, setApiKey] = useState("");

  const [userMessage, setUserMessage] = useState("");

  const [messageHistory, setMessageHistory] = useState([ { role: "system", content: "SYSTEM_MESSAGE"}]);

 

  const API_URL = "https://api.openai.com/v1/chat/completions" ;



  const sendRequest = async () => {




    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "SYSTEM_MESSAGE"},
          { role: "user", content: "Hello, Could you please Introduce yourself"}],
      }),
    });

  

  }

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow w-full">
        <div className="px-4 h-14 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-700">eduqbot</div>
          <div>
            <input
              type="password"
              className="border rounded p-1"
              placeholder="Enter API key here"
              onChange={e => setApiKey(e.target.value)}
              value={apiKey}
            />
          </div>
        </div>
      </nav>
      {/* History Message */}

      <div className="flex-1">
        <div className= "max-w-screen-md mx-auto w-full text-indigo-800">

          {messageHistory.map((message ,idx) => (
            <div key={idx} className="mt-3">

              <div className="font-bold">{message.role}</div>
              <div className="font-l">{message.content}</div>
            </div>
          ))}
        </div>
        </div>

        {/* Input box */}
        <div>
        <div className="max-w-screen-md mx-auto w-full flex px-4 pb-4">
          <textarea
          value={userMessage}
          onChange={e => setUserMessage(e.target.value)}
          className="border text-lg rounded-md flex-1" rows={1} />
           <button onClick={sendRequest} className="w-40 bordered rounded bg-blue-500 hover:bg-indigo-700 text-white p-2">Send</button>
</div>
        </div>

      


     
     </div>
 

 
  );
}
