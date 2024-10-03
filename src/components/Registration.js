import React from 'react';
import axios from 'axios';
import setCookie from '../Cookie/Set_Cookie';
import getCookie from '../Cookie/Get_Cookie';
import { Link } from "react-router-dom";



export const Modal_Reg = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

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
          <form onSubmit={this.handleSubmit}>
            <label>
              Код:
              <input type="text" name="first_name" onChange={this.handleChange1} /><br></br>
            </label>
            <button type="submit" >Отправить</button>
          </form>
          <li>
              <Link to="/">Home</Link>
          </li>
        </div>
      )
    }
  }

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <Code />
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

function Modal_reg() {
  const [isModal1, setModal1] = React.useState(false);
  setModal1(true);
  return (
    <Modal_Reg
      isVisible={isModal1}
      title="Подтверждение"
      content={<div>Подтверждение почты</div>}
      footer={<button>Отправить</button>}
      onClose={() => setModal1(false)}
    />
  )
}

export class Registration extends React.Component {
    state = {
        first_name: '',
        second_name: '',
        last_name: '',
        email: '',
        password: ''
    }
  
    handleChange1 = event => {
      this.setState({ first_name: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ second_name: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ last_name: event.target.value });
    }
    handleChange4 = event => {
        this.setState({ email: event.target.value });
    }
    handleChange5 = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        first_name: this.state.first_name,
        second_name: this.state.second_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      };
      setCookie("user", JSON.stringify(user));

      axios.post(` http://127.0.0.1:8000/api/account/before_registration/`, {
        email: this.state.email
     }, {
        "Content-type": "application/json; charset=UTF-8"}
      )
        .then(res => {
          const Token = res.data.token_registration;
          console.log(Token);
          setCookie('token_registration', Token, {secure: true, 'max-age': 2592000})
          console.log(res.data);
        })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input type="text" name="first_name" onChange={this.handleChange1} /><br></br>
              Second Name:
              <input type="text" name="second_name" onChange={this.handleChange2} /><br></br>
              Last Name:
              <input type="text" name="last_name" onChange={this.handleChange3} /><br></br>
              Email:
              <input type="email" name="email" onChange={this.handleChange4} /><br></br>
              Password:
              <input type="password" name="password" onChange={this.handleChange5} /><br></br>
              </label>
              <button type="submit">Reg</button>
          </form>
          <li>
              <Link to="/Regist/Regist1">Reg</Link>
          </li>
        </div>
      )
    }
  }


export default function Registration_Blok() {
    return <div><Registration /></div>;
  }