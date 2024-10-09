import React from 'react';
import axios from 'axios';
import setCookie from '../Cookie/Set_Cookie';
import getCookie from '../Cookie/Get_Cookie';
import { Link } from "react-router-dom";
import ModalRegistrastion from './ModalRegistrastion.js';



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
              <ModalRegistrastion />
          </form>
        </div>
      )
    }
  }


export default function Registration_Blok() {
    return <div><Registration /></div>;
  }