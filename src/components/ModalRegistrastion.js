import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import setCookie from '../Cookie/Set_Cookie';
import getCookie from '../Cookie/Get_Cookie';
import deleteCookie from '../Cookie/Delete_Cookie';
import { Link } from "react-router-dom";

function GoToEnter() {
  window.location.href = "/Enter"
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

export default function ModalRegistrastion(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

    class Code extends React.Component {  
        state = {
            key_mail: ''
        }
      
        handleChange1 = event => {
          this.setState({ key_mail: event.target.value });
        }
    
        handleSubmit = event => {
          event.preventDefault();
      
          let User = JSON.parse(getCookie("user"));
    
          axios.post(`http://127.0.0.1:8000/api/account/registration/`, {
            token_registration: getCookie('token_registration'),
            key_mail: this.state.key_mail,
            first_name: User['first_name'],
            second_name: User['second_name'],
            last_name: User['last_name'],
            email: User['email'],
            password: User['password']
         }, {
            "Content-type": "application/json; charset=UTF-8"}
          )
            .then(res => {
              const Token = res.data;
              console.log(Token);
              setCookie('token', Token, {secure: true, 'max-age': 2592000})
              console.log(res.data);
            })
    
        }

        render() {
          return (
            <div>
            <h2>Заголовок модального окна</h2>
            <p>Текст модального окна</p>
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Код:
                  <input type="text" name="code" onChange={this.handleChange1} /><br></br>
                </label>
                <button type="submit" onClick={GoToEnter}>Отправить</button>
              </form>
              <li>
                  <Link to="/">Home</Link>
              </li>
            </div>
            <button onClick={closeModal}>Закрыть</button>
            </div>
          )
        }
      }

    



    return (
        <div>
        <button type="submit" onClick={openModal}>Регистрация</button>
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
            {<Code />}
        </Modal>
        </div>
    );
}