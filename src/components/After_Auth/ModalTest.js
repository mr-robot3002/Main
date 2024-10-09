import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '80%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0%',
      //transform: 'translate(-50%, -50%)',
    },
  };

export default function  ModalTest(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };


    const modalContent = (
        <div>
        <h2>Заголовок модального окна</h2>
        <p>Текст модального окна</p>
        <button onClick={closeModal}>Закрыть</button>
        </div>
    );
    return (
        <div>
        <button onClick={openModal}>Открыть модальное окно</button>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            style={customStyles}
        >
            {modalContent}
        </Modal>
        </div>
    );
}