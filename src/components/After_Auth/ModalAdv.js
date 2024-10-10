import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import { Link } from "react-router-dom";


function Go_to_max() {
  setTimeout(
    function () {
      window.location.href = "http://localhost:3001/";
    }.bind(this),
    7000
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalAdv(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

    class Code extends React.Component {  
    
        handleSubmit = event => {
          event.preventDefault();
    
          axios.post(`http://127.0.0.1:8001/api/generate/`, {
            token: getCookie('token'),
            adv_id: getCookie('adv_id'),
         }, {
            "Content-type": "application/json; charset=UTF-8"}
          )
            .then(res => {
              console.log(res);
            })
    
        }

        render() {
          return (
            <div>
            <h2>Подтверждение</h2>
            <p>Вы подтверждаете данные?</p>
            <div>
              <form onSubmit={this.handleSubmit}>
                <button type="submit" onClick={Go_to_max}>ДА</button>
              </form>
            </div>
            <button onClick={closeModal}>Закрыть</button>
            </div>
          )
        }
      }

    



    return (
        <div>
        <button onClick={openModal}>Подтверждение</button>
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
        >
            {<Code />}
        </Modal>
        </div>
    );
}