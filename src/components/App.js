import React, {useState,useEffect} from "react";
import style from "./App.module.css";


function App() {
  const[name,setName]=useState("");
  const[lastname,setLastName]=useState("");

  
useEffect(()=>{
  document.title=name+" "+lastname;
}
)

useEffect(()=>{
  let timer=setInterval(()=>{console.log("Domo")},2000);

  return(clearInterval(timer));
})

  return (
    <>
    
    </>
  );
}

export default App;
