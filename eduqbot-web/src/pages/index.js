
import { useState } from "react";


const SYSTEM_MESSAGE = "You are an AI assistant eduqbot";



export default function Home() {
  const [apiKey, setApiKey] = useState("");

  const [botMessage, setBotMessage] = useState("");
 

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
          { role: "system", content: "SYSTEM MESSAGE"},
          { role: "user", content: "Hello, Could you please Introduce yourself"}],
      }),
    });

    const responseJson = await response.json();
    setBotMessage(responseJson.choices[0].message.content);  
    console.log("botMessage", botMessage);

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
        <div className= "max-w-screen-md mx-auto w-full text-indigo-800">Message History</div>
        </div>

        {/* Input box */}
        <div>
        <div className="max-w-screen-md mx-auto w-full flex">
          <textarea className="border text-lg rounded-md flex-1" /> 
</div>
        </div>

      


     <div className="p-4">
      <button className="w-40 bordered rounded bg-blue-500 hover:bg-indigo-700 text-white p-2"
      onClick={sendRequest}>Send Request</button>
      <div className="mt-4 text-lg">{botMessage}
      </div>

     </div>
    </div>

 
  );
}
