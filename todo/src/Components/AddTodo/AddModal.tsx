import React, { FormEvent, useRef } from 'react'
import ReactDOM from "react-dom"
import { Modal } from '../Modal/Modal'
import styles from './AddModal.module.css'

export const AddModal: React.FC<{formSubmit: (text: string) => void, modalClose: () => void}> = (props) => {
    const modalLocation = document.getElementById('modal-location');
    const textInput = useRef<HTMLInputElement>(null);
    if(modalLocation != null){
        return (
            <React.Fragment>
                {ReactDOM.createPortal(<Modal modalHeader="Add Todo Item" modalClose={props.modalClose}>
                    <form className={styles.form} onSubmit={(e: FormEvent) => {
                        e.preventDefault();
                        props.formSubmit(textInput.current!.value);
                        props.modalClose();
                    }}>
                        <div>
                            <label htmlFor="todoItem" className={`${styles.formElements} ${styles.formLabel}`}>Todo item name</label>
                            <input type="text" ref={textInput} name="todoItem" className={`${styles.formElements} ${styles.formInput}`}/>
                        </div>
                        
                        <input type="submit" value="Submit form" className={`${styles.formSubmit} ${styles.formElements}`}/>
                    </form>
                </Modal>, modalLocation)}
            </React.Fragment>
        )
    }else{
        return <React.Fragment></React.Fragment>
    }

}

