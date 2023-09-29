import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { ACTIONS, useTodos, useTodosDispatch } from '../contexts/TodosContext';

export default function AddTodo() {

    const [text, setText] = useState('');
    const todos = useTodos();
    const dispatch = useTodosDispatch();


    async function submitHandler(text) {
        if (text.length > 3) {
            try {
                const res = await fetch('http://10.0.2.2:8000/todos', {
                    method: 'POST',
                    body: JSON.stringify({
                        text: text,
                        completed: false
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                dispatch({
                    type: ACTIONS.ADD,
                    id: todos.length + 1,
                    text: text,
                });

                setText('');

            } catch (err) {
                alert(err);
            }

        } else {
            alert('Todos must be over 3 chars long');
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={setText}
                value={text}
            />
            <Button
                onPress={() => submitHandler(text)}
                title='add todo'
                color='#336140' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})


