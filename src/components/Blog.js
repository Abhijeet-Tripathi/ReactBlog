import React, { useState } from "react";
import style from "../cssModules/Blog.module.css";


function Blog() {
  const[form,setForm]=useState({title:"",content:""});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const[blogs,setBlogs]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([{title:form.title,content:form.content},...blogs]);
    setForm({title:"",content:""});
    // setTitle("");
    // setContent("");
    console.log(blogs);
    
  };
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
                  onChange={(e) => setForm({...form,title:e.target.value})}
                ></input>
                <hr />
                <h1 className={style.heading}>Blog Content</h1>
                <textarea
                  className={style.inp}
                  placeholder="Enter Content Here ..."
                  rows="5"
                  cols="70"
                  value={form.content}
                  name="description"
              onChange={(e) => setForm({...form,content:e.target.value})}
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
          </div>
      ))}

    </>
  );
}

export default Blog;
