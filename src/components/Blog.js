import React, { useState,useRef,useEffect,useReducer } from "react";
import style from "../cssModules/Blog.module.css";

function blogsReducer(state,action){
  switch(action.type){
    case "ADD":
      return [action.blog, ...state];
    case "REMOVE":
      return state.filter((blog,index)=>index!==action.index);
    default:
      return [];
  }
}


function Blog() {
  const[form,setForm]=useState({title:"",content:""});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const[blogs,setBlogs]=useState([]);
  const[blogs, dispatch]=useReducer(blogsReducer,[]);
  const titleRef=useRef(null);

  useEffect(()=>{
  titleRef.current.focus();
  },[]);

  useEffect(()=>{
    if(blogs.length && blogs[0].title)
    {document.title=blogs[0].title;}
    else{
      document.title="No Blogs!!";
    }
  },[blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setBlogs([{title:form.title,content:form.content},...blogs]);
    dispatch({type:"ADD",blog:{title:form.title,content:form.content}});
    setForm({title:"",content:""});
    titleRef.current.focus();
   
    // setTitle("");
    // setContent("");
    // console.log(blogs);
  };
  const handleDelete=(i)=>{
    // setBlogs(blogs.filter((blog,index)=>i!==index));
    dispatch({type:"REMOVE", index:i});

  }
  console.log("formData",form);
  return (
    <>
    <div className={style.coreContainer}>
            <h1 className={style.heading}>Write a Blog !</h1>
            <div className={style.container}>
              <form onSubmit={handleSubmit}>
                <h1 className={style.heading}>Title</h1>

                <input
                  className={style.inp}
                  placeholder="Enter Title ..."
                  type="text"
                  value={form.title}
                  ref={titleRef}
                  
                  onChange={(e) =>{ setForm({...form,title:e.target.value})
                  console.log(e.target.value);}} 
                ></input>
                <hr />
                <h1 className={style.heading}>Blog Content</h1>
                <textarea
                  className={style.inp}
                  placeholder="Enter Content Here ..."
                  rows="5"
                  cols="70"
                  required
                  value={form.content}
                  name="description"
              onChange={(e) => {setForm({...form,content:e.target.value})
              console.log(e.target.value);}}
                ></textarea>
                <hr />
                <button type="submit" className={style.btn}>
                  Add
                </button>
              </form>
            </div>
      </div>

<hr/>

      <h2 className={style.headinp}>-- Your Blog's --</h2>
      

      {blogs.map((blog,i)=>(
        <div className={style.slide} key={i}>
          <h1 className={style.slideTitle}>{blog.title}</h1>
          <h3 className={style.slideContent}>{blog.content}</h3>
            <div>
              <button 
              className={style.remove}
              onClick={()=>{handleDelete(i)}}
              >Delete</button>
            </div>
          </div>
      ))}

    </>
  );
}

export default Blog;
