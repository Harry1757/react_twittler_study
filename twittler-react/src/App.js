/*eslint-disable*/

import React, {Component} from "react"
import './App.css';
import NewT from "./NewT";


class State extends Component{
  state = {
    name :'이름을 입력해주세요.',
    text : '내용을 입력해 주세요.',
    tweets:[
      {
        uuid: 1,
        name: "황순환",
        date: "2020-11-18",
        text : "리엑트야 나좀 그만 괴롭혀...",
      }
    ]
  }
  handleChangeName = (연주) =>{
    this.setState({name: 연주.target.value})
  }
  handleChangeText = (연주) =>{
    this.setState({text: 연주.target.value})
  }

  handleSubmit = (연주) =>{
    연주.preventDefault()
    const {name,text,tweets} =this.state;
    this.setState({
      tweets : tweets.concat({
        uuid : tweets.length,
        name : name,
        date: new Date().toLocaleString(),
        text: text
      })
    })
  }

  
  render(){
    return(
      <div>
        <h1>Twittler</h1>
         <div>
          <input value = {this.state.value} onChange={this.handleChangeName} style ={{float:"left", height:"40px", width:"20%",marginLeft:"60px",marginTop:"60px"}}/>
          <textarea value={this.state.value} onChange={this.handleChangeText} style = {{float:"left", height:"40px", width:"67%",marginLeft:"60px"}}/>
          <button onClick={this.handleSubmit} style ={{float:"right",width:"20%",height:"40px"}}>TWITTE</button>
         </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <ul>
          {this.state.tweets.map((item,index)=>(
          <NewT uuid={index} name={item.name} date={item.date} text={item.text} />
          ))}
        </ul>
      </div>
    )
  }
}


export default State;

