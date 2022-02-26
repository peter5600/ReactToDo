import React from 'react'
import styles from './Modal.module.css'

export const  Modal: React.FC<{modalClose: () => void, modalHeader: string}> = (props) =>{
  return (
    <div className={styles.outerModal}>
        <div className={styles.contentModal}>
            <div className={styles.modalHeader}>
                <span className={styles.closeModal} onClick={() => {props.modalClose()}}>&times;</span>
                <h2>{props.modalHeader}</h2>
            </div>
            
            <div className={styles.innerContentModal}>
                {props.children}
            </div>
            <div className={styles.modalFooter}>
                <h4>Copyright Peter Colquhoun&copy; 2022</h4>
            </div>
        </div>
    </div>
  )
}
