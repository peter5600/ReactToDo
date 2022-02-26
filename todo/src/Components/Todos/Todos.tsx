import React, { useState } from 'react'
import { AddModal } from '../AddTodo/AddModal';
import { Todo } from '../Todo/Todo';
let todos: { id: number, text: string, active: boolean }[] = [
    {
        id: Math.random(),
        text: 'Peter First Todo',
        active: true
    },
    {
        id: Math.random(),
        text: 'Peter Second Todo',
        active: false
    }
];

export default function Todos() {

    const [todoList, updateTodoList] = useState<{ id: number, text: string, active: boolean }[]>(todos);
    const [isOpen, setIsOpen] = useState(false);
    //the two types allow state to be empty and be of type object

    const reverseActive = (id: number) => {
        updateTodoList((prevState) => {
            const newState = prevState.map((s) => {
                if (s.id == id) {
                    return { ...s, active: !s.active };
                } else {
                    return s;
                }
            })
            return [
                ...newState
            ];
        });
    }

    const deleteTodo = (id: number) => {
        updateTodoList((prevState) => {
            const newState = prevState.filter((s) => {
                if (s.id != id) {
                    return s;
                }
            })
            return [...newState];

        });
    }

    const updateTodo = (id: number, text: string) => {
        updateTodoList((prevState) => {
            const newState = prevState.map((s) => {
                if (s.id == id) {
                    return { ...s, text: text };
                } else {
                    return s;
                }
            })
            return [
                ...newState
            ];
        });
    }

    const addTodo = () => {
        setIsOpen(true);
    }

    const todoAdded = (text: string) => {
        updateTodoList((prevState) => {
            return [
                ...prevState.concat({
                    id: Math.random(),
                    text: text,
                    active: true
                })
            ]
        });
    }

    const modalClose = () => {
        setIsOpen(false);
    }
    return (
        <React.Fragment>
            {todoList.map(todo => {
                return <Todo key={todo.id} id={todo.id} text={todo.text} active={todo.active} reverseActive={reverseActive}
                    deleteTodo={deleteTodo} updateTodo={updateTodo} />
            })}
            <button onClick={addTodo}>Add Todo</button>
            {isOpen && <AddModal modalClose={modalClose} formSubmit={todoAdded}></AddModal>}
        </React.Fragment>
    )
}
