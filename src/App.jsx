import { Contextapi } from "./components/Context";
import { useContext, useState, useEffect } from "react";
import Chatbot from "./components/Chatbot";

function App()
{
  const {setValue}=useContext(Contextapi);
  const [inputVal, setInputVal]=useState(" ");
  const [loading, setLoading]=useState(false);

  const handleChange=(e)=>{
    let value=e.target.value;
    setInputVal(value);
  }

  const handleSubmit=()=>{
    console.log(inputVal);
    setLoading(true);
    setValue(inputVal);
  }

  const inpStyle={
    padding: '0.5rem 12rem 0.5rem 0.5rem'
  }
  

  return(
    <>
    <h1 style={{textAlign:'center', fontFamily: 'Merriweather Sans, sans-serif'}}>AI Chatbot</h1>
    <div style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', fontFamily: 'Merriweather Sans, sans-serif'}}>
      <div>
        <input type="text" value={inputVal} onChange={handleChange} style={inpStyle}/>
        <button id="search" onClick={handleSubmit} style={{padding: '0.5rem'}}>ask</button>
      </div>
      <Chatbot loading={loading} setLoading={setLoading}/>
      </div>
    </>
  )
}


export default App;