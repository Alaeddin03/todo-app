import React, { useEffect } from 'react'
import { useTodos, useTodosDispatch } from '../context/TodosContext'
import { FlatList, StyleSheet } from 'react-native';
import Todo from './Todo';

export default function TodoList({ hideCompleted }) {

  const todos = useTodos();

  const dispatch = useTodosDispatch();

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      console.log('fetching');
      const res = await fetch('http://10.0.2.2:8000/todos');
      const data = await res.json();
      console.log("data: " , data);
      return dispatch({
        type: 'setTodos',
        todos: data
      });
    }
    catch (err) {
      console.log(err);
    }
  }



  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={hideCompleted
        ? todos?.filter(todo => !todo.completed)
        : todos}
      style={styles.list}
      renderItem={({ item }) => (
        <Todo todo={item} />
      )}
    />
  )
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
});