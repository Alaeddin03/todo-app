import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodosProvider } from './contexts/TodosContext';

export default function App() {

  const [hideCompleted, setHideCompleted] = useState(false);

  return (
    <TodosProvider>
      <Header />
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.content}>

          <View style={styles.form}>
            <AddTodo />
          </View>

          <Button
            title={
              hideCompleted ? 'Show Completed'
                : 'Hide Completed'
            }
            onPress={() => setHideCompleted(!hideCompleted)}
            color={'#336140'}
          />

          <View style={styles.list}>
            <TodoList hideCompleted={hideCompleted} />
          </View>

        </View>

      </View>
    </TodosProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 40,
  },
  form: {
    marginBottom: 20,
  },
  list: {
    flex: 1,
    width: '100%',
  }
});
