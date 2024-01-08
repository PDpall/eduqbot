

import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState("");


  const API_URL = "https://api.openai.com/v1/chat/completions";

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
      <button className="border rounded-md p-2">Send Request</button>

     </div>
    </div>
