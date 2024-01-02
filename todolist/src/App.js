import logo from './logo.svg';
import React,{useContext, useState} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';
// import React,{useState} from 'react';

function App() {
  const [isCompleteScreen,setIsCompleteScreen]=useState(false)
  return (
    <div className="App">
      <h1>Yika Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder='enter a title'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder='enter a description'/>
          </div>
          <div className='todo-input-item'>
            <button className='primaryBtn'>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === false && `active`}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={` secondaryBtn isCompleteScreen ${isCompleteScreen === true && `active`}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          <div className='todo-list-item'>
            <h3>New Task </h3>
            <p>description</p>
          </div>
          <div>
            <AiOutlineDelete className="icon"/>
            <button className="check-icon">D</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
