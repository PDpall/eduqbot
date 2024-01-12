import { useState } from "react"; 

export default function Home() {

  const [apiKey, setApiKey] = useState("");
  const API_URL = "https://api.openai.com/v1/chat/completions";
  /*console.log ("apiKey", apiKey);*/
  
  async function sendRequest () { 
    const response = await fetch (API_URL, {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer "+ apiKey,
      },
      body: JSON.stringify ({
        model:"gpt-3.5-turbo",
        messages:  [{role: "user", content: "Hello!" }],
      }),
    });

    const responseJson = await response.json ();
    console.log ('responseJson', responseJson);
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
    <div className ="px-4 py-4"> 
      <button className="border rounded-md p-2 bg-blue-500  hover:bg-blue-600 text-white"
      onClick={sendRequest}> 
        Send Request 
      </button>
    </div>
  </div>
}



