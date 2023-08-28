import React from "react";
import style from "./Test.module.css";
class Jest extends React.Component{
    constructor(){
        super();
        this.state={
            name:"lol",
            lastname:"bhool"
        }
    }

    handlename=(e)=>{
        this.setState({
            name:e.target.value,
        })
}

handlelastname=(e)=>{
    this.setState({
        lastname:e.target.value,
    })
}

componentDidMount(){
    document.title=this.state.name+" "+this.state.lastname;
    
    this.timer=setInterval(()=>{console.log(window.innerWidth)},2000);
}


componentDidUpdate(){
    document.title=this.state.name+" "+this.state.lastname;
    
}

componentWillUnmount(){
    clearInterval(this.timer);
}


    render(){
        return(
            <>
                 <div className={style.container}>
                <label className={style.heading}>Name</label>
                <br/>
                <input className={style.inp} onChange={this.handlename} type="text" value={this.state.name}></input>
                <hr/>
                <label className={style.heading}>Last Name</label>
                <br/>
                <input className={style.inp} onChange={this.handlelastname} type="text" value={this.state.lastname}></input>
                <hr/>
                </div>
                
                <h2 className={style.headinp}>Hello,{this.state.name+" "+this.state.lastname}</h2>

            </>
        )
    }

}

 export default Jest;