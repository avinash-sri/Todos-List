import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log('ondelete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'go to the school',
      desc: 'go there for study'
    },
    {
      sno: 2,
      title: 'go to the temple',
      desc: 'go there for prayers'
    },
    {
      sno: 3,
      title: 'go to the theatre',
      desc: 'go there for movie'
    }
  ])

  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
