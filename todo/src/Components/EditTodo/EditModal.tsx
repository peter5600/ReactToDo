import React, { FormEvent, useRef } from 'react'
import ReactDOM from "react-dom"
import { Modal } from '../Modal/Modal'

export const EditModal: React.FC<{formSubmit: (text: string) => void, modalClose: () => void}> = (props) => {
    const modalLocation = document.getElementById('modal-location');
    const textInput = useRef<HTMLInputElement>(null);
    if(modalLocation != null){
        return (
            <React.Fragment>
                {ReactDOM.createPortal(<Modal modalClose={props.modalClose}>
                    <form className='form' onSubmit={(e: FormEvent) => {
                        e.preventDefault();
                        props.formSubmit(textInput.current!.value)
                    }}>
                        <input type="text" ref={textInput}/>
                        <input type="submit" value="Submit form" />
                    </form>
                </Modal>, modalLocation)}
            </React.Fragment>
        )
    }else{
        return <React.Fragment></React.Fragment>
    }

}

