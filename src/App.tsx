import React from 'react';
import './App.css';

/*
  작성자 : 1ch
  작성일 : 2030.05.30
  내용 : 기능에 대한 내용
*/

function App() {
  let name = "리액트";
  return (
    <div className='container'>
      <h1 className='text'>Hello,
        {
          name === "리액트" ? (<h1>YES</h1>) : null
        }!!</h1>

    </div>
  );
}

export default App;
