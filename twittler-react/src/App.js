/*eslint-disable*/

import React, {useState} from "react"
import './App.css';

function App() {
  let [따봉, 따봉변경] = useState(0)
  let [작성내용,새로운내용] = useState(['누나이거 어떻게 하는거야??','안알려주지~'])//여기에 내용 푸쉬하고
  let [작성자,새로운작성자] = useState(['파피몬','파닥몬'] );// 이건 a의 데이터가 들어가 있음// 여기에 작성자 이름을 넣고
  function 작성자바꾸기(){
    let arr = [...작성자]//딥카피를 하고'
    arr[0] = "울프몬"//새로운값을 넣어준다
    새로운작성자(arr)
  }
  return (
    <div className="App">
      <div className="title">
        <div>작성자:황순환</div>
      </div>
      <div>
      <textarea style={{width:"90%",height:"150px",float:"left"}}></textarea>
      <button style={{width:"9%",height:"156px",float : "right"}} onClick={작성자바꾸기}>버튼</button><br/>
      </div>
        <div className = "list">
          <h3>작성자:{작성자[0]}</h3> 
          <p>{작성내용[0]}</p>
          <hr/>
        </div>
        <div className = "list">
          <h3>작성자:{작성자[1]}   &ensp; <span onClick={()=>{따봉변경(따봉+1)}}>👎</span>{따봉}</h3> 
          <p>{작성내용[1]}</p>
          <hr/>
        </div>
    </div>
  );
}

export default App;
