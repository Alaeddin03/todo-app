import React, { useState } from 'react'
import { ACTIONS, useTodosDispatch } from '../contexts/TodosContext'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';

export default function Todo({ todo }) {

    const dispatch = useTodosDispatch();

    const [isEditing, setIsEditing] = useState(false);

    const [text, setText] = useState(todo.text);

    async function editHandler(todo) {
        try {
            const res = await fetch(`http://10.0.2.2:8000/todos/${todo.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    text: todo.text,
                    completed: todo.completed
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            dispatch({
                type: ACTIONS.EDIT,
                todo: {
                    id: todo.id,
                    text: todo.text,
                    completed: todo.completed
                }
            });
        }

        catch (err) {
            alert(err);
            console.log(err);
        }

    }

    async function deleteHandler(id) {
        try {
            const res = await fetch(`http://10.0.2.2:8000/todos/${id}`, {
                method: 'DELETE',
            });

            dispatch({
                type: ACTIONS.DELETE,
                id: id
            });
        }
        catch (err) {
            alert(err);
            console.log(err);
        }
    }

    return (
        <>
            {
                isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        autoFocus={true}
                        onBlur={() => {
                            setIsEditing(false);
                            editHandler({
                                id: todo.id,
                                text: text,
                                completed: todo.completed
                            });
                        }}
                    />
                ) : (
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.todo}
                            onPress={() => editHandler({
                                id: todo.id,
                                text: todo.text,
                                completed: !todo.completed
                            })
                            }>
                            <Text style={todo.completed
                                ? styles.completed
                                : styles.uncompleted}>
                                {todo.text}
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.options}>

                            <TouchableOpacity onPress={() => setIsEditing(true)}>
                                <Icon
                                    color={'gray'}
                                    name='edit'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => deleteHandler(todo.id)}>
                                <Icon
                                    color={'gray'}
                                    name='delete'
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                )
            }
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: '#336140',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textTransform: 'capitalize'
    },
    input: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor: '#336140',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textTransform: 'capitalize'
    },
    todo: {
        flex: 1,
        width: '100%',
    },
    completed: {
        flex: 1,
        textTransform: 'capitalize',
        textDecorationLine: 'line-through',
    },
    uncompleted: {
        flex: 1,
        textTransform: 'capitalize',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
})