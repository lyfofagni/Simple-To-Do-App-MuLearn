import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, XCircle, Circle } from 'lucide-react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Today's Tasks</h1>
            <p className="text-gray-600">Keep track of your daily goals</p>
          </div>
          
          <AddTodo onAdd={addTodo} />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {todos.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No tasks yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;