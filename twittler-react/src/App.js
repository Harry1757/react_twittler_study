import React, { Component } from 'react'
import './App.css';

class Twittler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: "김코딩",
          date: "2020-10-10",
          content: "안녕 리액트"
        },
        {
          uuid: 2,
          writer: "박해커",
          date: "2020-10-12",
          content: "좋아 코드스테이츠!"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div id="writing-area">
          <div id="user-area">
            작성자 :  <input id="new-tweet-user" type="text" name="user" placeholder=" 이름을 입력해주세요"></input>
          </div>
          <input id="new-tweet-content" type="text" name="message" placeholder=" 메세지를 입력하세요"></input>
          <button id="submit-new-tweet">Tweet!</button>
        </div>
        <ul id="tweets">
          <SingleTweet writer={this.state.tweets[0].writer} date={this.state.tweets[0].date} content={this.state.tweets[0].content}/>
          <SingleTweet writer={this.state.tweets[1].writer} date={this.state.tweets[1].date} content={this.state.tweets[1].content}/>
        </ul>
      </div>
    )
  }
}

class SingleTweet extends React.Component {
  render() {
    return (
      <li className="tweet">
        <div className="writer">{this.props.writer}</div>
        <span className="date">{this.props.date}</span>
        <div className="content">{this.props.content}</div>
      </li>
    )
  }
}

// this.states.tweets의 요소마다 싱글 트윗을 적용한다 / 함수 사용

export default Twittler;