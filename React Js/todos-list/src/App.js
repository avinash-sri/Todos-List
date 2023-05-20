import './App.css';
import { AddTodo } from './Components/AddTodo';
import { Footer } from './Components/Footer';
import { About } from './Components/About';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log('ondelete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding Todos here", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
    <Router>
      <Header title="Todos List" searchBar={false} />
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )
        }}>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>


      <Footer />
      </Router>
    </>
  );
}

export default App;
