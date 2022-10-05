import "./App.css";
import Header from "./myComponents/header";
import Footer from "./myComponents/footer";
import { AddTodo } from "./myComponents/addTodo";
import { Todos } from "./myComponents/todos";
import React, { useState, useEffect } from "react";
import About from './myComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
      <Header title="BasicsOfReact" />
      <Switch>
          <Route exact path="/" render={()=>{
            return(<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;

//class,for is written as className,htmlfor in JSX
//java script is written in { }
// html is written between <> and </>
//< Add/> 1st alphabet should be capitalized
// let 'todos = ' before; 'const [todos, setTodos] = useState( [' after=it updates todo everytime we click
