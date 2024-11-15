import React from 'react';
import { CheckCircle2, XCircle, Circle } from 'lucide-react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
        >
          <button
            onClick={() => onToggle(todo.id)}
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            {todo.completed ? (
              <CheckCircle2 className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}
          </button>
          
          <span
            className={`flex-1 ${
              todo.completed
                ? 'text-gray-400 line-through'
                : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
          
          <button
            onClick={() => onDelete(todo.id)}
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
          >
            <XCircle />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;