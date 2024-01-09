


import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState("");


 

  const API_URL = "https://api.openai.com/v1/chat/completions";
  
  const [botMessage, setBotMessage] = useState("");

  const sendRequest = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello!" }],
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

     <div className="p-4">
      <button className="w-40 bordered rounded bg-blue-500 hover:bg-indigo-700 text-white p-2"
      onClick={sendRequest}>Send Request</button>

     </div>
    </div>
  );
}

     <div className="p-4">
      <button className="border rounded-md p-2">Send Request</button>

     </div>
    </div>
