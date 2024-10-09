import React from 'react';
import axios from 'axios';
import { Link, Navigate} from "react-router-dom";
import setCookie from '../Cookie/Set_Cookie';
import getCookie from '../Cookie/Get_Cookie';
import deleteCookie from '../Cookie/Delete_Cookie';

function isAuth() {
  if (getCookie('token') != '')
    return true;
  else
    return false; 
}

export class Enter extends React.Component {
    state = {
        email: '',
        password: ''
    } 

    handleChange1 = event => {
        this.setState({ email: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      
      axios.post('http://127.0.0.1:8000/api/account/login/', {
        email: this.state.email,
        password: this.state.password 
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
          return (alert("I am an alert box!"))
          // Запрос был сделан, и сервер ответил кодом состояния, который
          // выходит за пределы 2xx
          //console.log(error.response.data);
          //console.log(error.response.headers);
        } else if (error.request) {
          // Запрос был сделан, но ответ не получен
          // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
          // http.ClientRequest в node.js
          console.log(error.request);
        } else {
          // Произошло что-то при настройке запроса, вызвавшее ошибку
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

      axios.post(`http://127.0.0.1:8000/api/account/login/`, {
        email: this.state.email,
        password: this.state.password 
      })
      .then(res => {
        const Token = res.data.token;
        const Data = JSON.stringify({'token': Token}) // можно отправлять в куки словарь серелизованый в json формат
        setCookie('token', Token, {secure: true, 'max-age': 2592000})
        //console.log(res);
        //console.log(res.data.token);
        console.log(getCookie('token'))
        window.location.href = "/main"
      })
      
    }
    
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" onChange={this.handleChange1} /><br></br>
              Password:
              <input type="password" name="password" onChange={this.handleChange2} /><br></br>
            </label>
              <button type="submit" >Войти</button>
          </form>
          <li>
              <Link to="/">Home</Link>
          </li>
        </div>
      )
    }
  }
  

export default function Enter_Blok() {
  return <div><Enter /></div>;
}