import { createContext, useContext, useReducer } from "react";

const TodosContext = createContext();

const TodosDispatchContext = createContext();

export function TodosProvider({ children }) {
    
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
    return useContext(TodosContext);
}

export function useTodosDispatch() {
    return useContext(TodosDispatchContext);
}

export const ACTIONS = {
    SET_TODOS: 'setTodos',
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete'
}

function todosReducer (todos, action) {
    switch (action.type) {

        case 'setTodos': {
            return action.todos;
        }

        case 'add': {
            return [...todos, { 
                id: action.id, 
                text: action.text, 
                completed: false 
            }];
        }

        case 'edit': {
            return todos.map(todo => {
                if (todo.id === action.todo.id) return action.todo;
                else return todo;
            });
        }

        case 'delete': {
            return todos.filter(todo => todo.id !== action.id);
        }
        
        default:
            throw new Error("Unkown action: " + action.type);
    }
}

