import React, { useState } from 'react'
import { EditModal } from '../EditTodo/EditModal'
import styles from './Todo.module.css';

export const Todo: React.FC<{text: string, active:boolean, id: number, reverseActive: (id: number) => void, 
    deleteTodo: (id: number) => void, updateTodo: (id:number, text:string) => void}> = (props) => {
        const [isOpen, setIsOpen] = useState(false);

        const editTodo = () => {
            setIsOpen(!isOpen);
        }

        const todoEdited = (text: string) =>{
            props.updateTodo(props.id, text);
        }

        const modalClose = () => {
            setIsOpen(false);
        }

    return (
    <div className={`${styles.outerTodo}`}>
        <div onClick={() => {props.reverseActive(props.id);}} className={`${styles.todoItemNameDiv}`}>
            {props.active == true && <p className={`${styles.todoItemName}`}>{props.text}</p>}
            {props.active == false && <s><p className={`${styles.todoItemName}`}>{props.text}</p></s>}
        </div>
        <div className={`${styles.todoBtnGroup}`}>
            <button onClick={editTodo} className={`${styles.todoEdit}`}>Edit</button>
            <button onClick={() => {props.deleteTodo(props.id)}} className={`${styles.todoDelete}`}>Delete</button>
        </div>
        {isOpen && <EditModal modalClose={modalClose} formSubmit={todoEdited}></EditModal>}
    </div>
    
  )
}
