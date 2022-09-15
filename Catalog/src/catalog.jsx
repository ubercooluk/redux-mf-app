
import React, { useState } from "react";
import './style.scss';
import data from './catalogdata.js';
// import { useStore } from "store/store";
import { GlobalStore } from 'redux-micro-frontend';
import  { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from "./store/todoReducer";
import { AddTodo, RemoveTodo } from "./store/todoAction";
import {IncrementCounterGlobal, DecrementCounterGlobal} from './store/counter.global';
import AddTodoComponent from "./Todo/addTodo";
import Todo from "./Todo/Todo";


const Catalog = () =>  {
   // const {increment, decrement, cart} = useStore();
    const [todos, setTodos] = useState([]);
    const globalStore = GlobalStore.Get();
    const store = configureStore({reducer: todoReducer});
    globalStore.RegisterStore("CatalogApp", store, [GlobalStore.AllowAll]);
      try {
        globalStore.SubscribeToPlatformState("CatalogApp", "rootApp", rootData);
      }
      catch(error) {
        // error handling
      }
      globalStore.SubscribeToGlobalState("CatalogApp", updateState);

      function updateState(globalstate) {
          console.log(globalstate);
      }


      function addTodoMethod(description) {
        globalStore.DispatchAction("CatalogApp", AddTodo(description));
      }
      function removeTodoMethod(id){
        globalStore.DispatchAction("CatalogApp", RemoveTodo(id));
      }
      function rootData(changedState) {
        console.log(changedState);
      }
      function incrementCounter(){
        globalStore.DispatchGlobalAction("rootApp",IncrementCounterGlobal());
      }
      function decrementCounter() {
        globalStore.DispatchGlobalAction("rootApp", DecrementCounterGlobal());
      }

    return(
      <React.Fragment>    <div className="container">
    {data.map(function(product, index){
        return (            
            <div className="card" key={index}>       
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <div><button type="button" onClick={incrementCounter}>+</button>Add/Delete<button type="button" onClick={decrementCounter}>-</button></div>
      </div>)})}

      
    </div>
    
    <div>
    <AddTodoComponent addTodo={addTodoMethod}></AddTodoComponent>
    <h2>TODOS</h2>
    <ul>
      {todos.map(todo => {
        return(
          <li key={todo.id}>
            <Todo id={todo.id} description={todo.description} removeTodo={removeTodoMethod} />
          </li>
        )
      })}
    </ul>
</div></React.Fragment>

    );
    };
export default Catalog;