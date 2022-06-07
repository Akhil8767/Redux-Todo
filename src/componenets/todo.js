import React, { useState } from "react";
import {add,deleteTodo,removeAll} from "../action/action"
import { useDispatch,useSelector } from "react-redux";
import "./todo.css";

const Todo = () => {
   const [input,SetInput]=useState()
   const dispatch=useDispatch()
   const list =useSelector((state)=>state.reducer.list)

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List here ✌</figcaption>
          </figure>

          <div className="addditems">
            <input type="text"
            placeholder="✍"
            value={input}
            onChange={(e)=>SetInput(e.target.value)}
           />
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(add(input),SetInput(''))}></i>
          </div>   

          <div className="showItems">
            {
              list.map((elem)=>{
                return(
                  <div className="eachItem " key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                  <i className="far fa-trash-alt add-btn" 
                  title="delete item"
                  onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                  </div>
                </div>
                )
              })
            }
            </div>
            <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" 
            onClick={()=>dispatch(removeAll())}><span>Check List</span></button>
            </div>
        </div>
      </div>
    </>
  )
};

export default Todo;
