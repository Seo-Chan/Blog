import React, { useState } from 'react';
import './app.css'

function App() {
  let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '여자코트추천', '대전맛집', '대전카페']);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        글제목.map(function (a, i) {
          return (
            <div className="list">
              <h3 onClick={() => { setModal(!modal); setTitle(i) }}>{글제목[i]}<span onClick={() => {
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy)
              }}>👍🏻</span>{따봉[i]}</h3>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy)
              }}>삭제</button>
              <hr />
            </div>
          )
        })
      }

      <input onChange={(e) => {
        e.stopPropagation();
        입력값변경(e.target.value);
        console.log(입력값)
      }}></input>
      <button onClick={() => {
        let copy = [...글제목];
        let copy2 = [...따봉];
        copy.unshift(입력값)
        copy2.unshift(0)
        입력값 === '' ? alert('입력하세요') : 글제목변경(copy); 따봉변경(copy2);
      }}>글 추가</button>

      {
        modal == true ? <Modal 글제목={글제목} title={title} /> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button>수정</button>
    </div>
  )
}

export default App;
