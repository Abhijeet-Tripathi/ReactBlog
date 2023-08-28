import React,{useState} from "react";
import style from '../cssModules/Blog.module.css';
function Blog(){
    const[name,setName]=useState("");
    const[lastname,setLastName]=useState("");

    return(
        <>
        <h1>Blog_Creation:-</h1>
        <div className={style.container}>
      <h1 className={style.heading}>Title</h1>
      
       <input className={style.inp}  placeholder="Enter Title ..." type="text" onChange={(e)=>setName(e.target.value)}></input>
       <hr/>
       <h1 className={style.heading}>Blog Content</h1>
       <textarea className={style.inp} placeholder="Enter Content Here ..." rows="5" cols="70" name="description" onChange={(e)=>setLastName(e.target.value)}></textarea>
      <hr/>
       {/* <input className={style.inp} type="text" onChange={(e)=>setLastName(e.target.value)}></input> */}
       <button className={style.btn}>Add</button>
       </div>
    
      <h2 className={style.headinp}>Blog {name+" "+lastname}</h2>

        </>
    )
}

export default Blog;