import { useState } from 'react';
import './App.css';
import React from 'react'

const Z = () => {
  let [todolist, settodolist] = useState([])
  let saveToDoList = (event) =>{
    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
      let finaltodolist = [...todolist, toname];
      settodolist(finaltodolist);
    }
    else{
      alert("Item Already Exist");
    }
    
    event.preventDefault()
  }
  let list = todolist.map((value,index) => {
    return(
      <ToDoListItem value={value} key={index} indexnumber = {index} todolist={todolist} settodolist={settodolist} />
    )
  })
  return (    
    <div className='container'>
      <h1>ToDo List</h1>
      <form action="" onSubmit={saveToDoList}>
          <input type="text" name = "toname" />
          <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}         
        </ul>
      </div>
    </div>
  )
}

export default Z;

function ToDoListItem({value, indexnumber,todolist,settodolist}){
  let remove = () =>{
    let finalData = todolist.filter(item => item !== todolist[indexnumber]);
    settodolist(finalData);
  }
  let[linethrough, setlinethrough] = useState(false);
  let checkStatus = () =>{
    setlinethrough(!linethrough)
  }

  return(
    <li className={linethrough ? 'completetodo': ''} onClick={checkStatus} >{value} <span onClick={remove}>&times;</span></li>
  )
}

