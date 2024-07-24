
import { createContext, useReducer

 } from "react";

const Contextapi=createContext();



const reducer=(state, action)=>{
    if(action.type === "valueChange")
    {
        return{
            ...state,
            inputValue: action.payload,
        }
    }
    // return state;
}

const initialState={
    inputValue: " ",
    chatres: " ",

}


const ContextProvider=({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const setValue=(inpvalue)=>{
        return dispatch({
            type: "valueChange",
            payload: inpvalue
        })
    }

    return(
        <Contextapi.Provider value={{...state, setValue}}>{children}</Contextapi.Provider>
    )
}

export {Contextapi, ContextProvider};