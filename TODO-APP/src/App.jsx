import  { useEffect, useState } from "react";
import TodoList from './components/TodoList.jsx'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Swal from 'sweetalert2'

function App() {
  const [todos , setTodos] = useState([])
  const [todoInput,settodoInput] = useState("")
  const [filtered , setFiltered] = useState("all")
  const [searchInput , setSearchInput] = useState("")

  useEffect(()=>{
    const localData = localStorage.getItem('todos')
    if (localData) {
      setTodos(JSON.parse(localData))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos))
  },[todos])
  
  
  const addTodo = ()=>{
    if (todoInput.trim()==='') return;
    setTodos([...todos ,{ id : Date.now() , text : todoInput, isCompleted : false}])
    settodoInput('') 
    console.log(todos)
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const types = {
    all : "all",
    complated : "complated",
    pending : "pending"
  }

  const filteredTodos = todos.filter((t)=>{
    const filteredByTypes = filtered === types.all || (filtered === types.complated && t.isCompleted) || (filtered === types.pending && !t.isCompleted)
    const filteredBySearchInput = t.text.toLowerCase().includes(searchInput)
    return filteredByTypes && filteredBySearchInput
  })

  const deleteAll = ()=>{
    Swal.fire({
      title: "Are you sure to delete all?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const deleteTodo = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTodos = todos.filter((t) =>t.id !== id)
        setTodos(filteredTodos)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

  const complated = (id)=>{
    setTodos(todos.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted } : t))
  }  
  

  return (
    <Container className="App">
      <h1 className="my-4 text-center">Todo App</h1>

      <Row className="mb-4">
        <Col sm={8} md={9}>
          <Form.Control
            type="text"
            placeholder="Add a new task"
            className="todo-input"
            value={todoInput}
            onChange={(e)=>{settodoInput(e.target.value)}}
            onKeyDown={(e)=>{
              if (e.key === "Enter") {
                addTodo()
              }
            }}
          />
        </Col>
        <Col sm={4} md={3}>
          <Button
            className="w-30 add"
            variant="primary"
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col sm="auto">
          <Button
            variant="outline-secondary"
            onClick={()=>{setFiltered(types.all)}}
          >
            All Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            variant="outline-success"
            onClick={()=>{setFiltered(types.complated)}}
          >
            Completed Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            variant="outline-warning"
            onClick={()=>{setFiltered(types.pending)}}
          >
            Pending Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            className="filter-btn"
            variant="outline-danger"
            onClick={deleteAll}
          >
            Clear All
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col sm="auto">
        <input type="text" placeholder="Search your ToDo" className={"search"} onChange={(e)=>{setSearchInput(e.target.value.trim())}}/>
        </Col>
      </Row>
      <TodoList filteredTodos={filteredTodos} deleteTodo={deleteTodo} complated={complated} editTodo={editTodo}/>
      <p className="mt-3">You have <span style={{color:'red'}}>{todos.filter((f)=>{return !f.isCompleted}).length}</span> pending todos</p>
    </Container>
  );
}

export default App;