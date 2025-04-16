import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';


const  ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Todo List</h1>


      <Form onSubmit={addTodo} className="mb-4">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Thêm công việc mới..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Thêm
          </Button>
        </InputGroup>
      </Form>


      <ListGroup>
        {todos.length === 0 ? (
          <p className="text-center">Chưa có công việc nào!</p>
        ) : (
          todos.map((todo) => (
            <ListGroup.Item
              key={todo.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <Form.Check
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  label={
                    <span
                      style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                      }}
                    >
                      {todo.text}
                    </span>
                  }
                />
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Xóa
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
}

export default ToDoList;