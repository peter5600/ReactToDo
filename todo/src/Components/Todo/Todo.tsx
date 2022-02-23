import React, { useState } from 'react'
import { EditModal } from '../EditTodo/EditModal'

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
    <div>
        <div onClick={() => {props.reverseActive(props.id);}}>
            {props.active == true &&<p>{props.text}</p>}
            {props.active == false &&<s><p>{props.text}</p></s>}
        </div>
        <button onClick={editTodo}>Edit</button>
        <button onClick={() => {props.deleteTodo(props.id)}}>Delete</button>
        {isOpen && <EditModal modalClose={modalClose} formSubmit={todoEdited}></EditModal>}
    </div>
    
  )
}
