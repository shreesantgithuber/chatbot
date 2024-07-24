import { useContext, useState, useEffect } from "react";
import { Contextapi } from "./Context";
import { GoogleGenerativeAI } from '@google/generative-ai';

function Chatbot({loading, setLoading})
{
    const {inputValue}= useContext(Contextapi);
    console.log("inside chat bot input value ",inputValue);
    const SECRET_KEY=import.meta.env.VITE_API_KEY;
    console.log(SECRET_KEY);

    const [res, setRes]=useState(" ");
  const genAI = new GoogleGenerativeAI(SECRET_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const run=async ()=>{
    const prompt = inputValue;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setRes(text);
    setLoading(false);
  }


useEffect(()=>{
  run();
},[inputValue]);


    return(
        <>
            <h1>{inputValue}</h1>
            {
            loading ? <p>Searching for the {inputValue}....</p>:
            <p>{res}</p>
            }
        </>
    )
}

export default Chatbot;