import React from 'react'
import styles from './Modal.module.css'

export const  Modal: React.FC<{modalClose: () => void}> = (props) =>{
  return (
    <div className={styles.outerModal}>
        <div className={styles.contentModal}>
            <span className={styles.closeModal} onClick={() => {props.modalClose()}}>&times;</span>
            <div className={styles.innerContentModal}>{props.children}</div>
        </div>
    </div>
  )
}
