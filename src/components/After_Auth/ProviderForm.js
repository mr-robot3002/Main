import React from 'react';
import axios from 'axios';
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import { Link } from "react-router-dom";
import ModalAdv from './ModalAdv';

export class ProviderForm extends React.Component {
    state = {
        title: '',
        text_in: '',
        skill_level: ''
    }
  
    handleChange1 = event => {
      this.setState({ title: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ text_in: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ skill_level: event.target.value });
    }
  


    handleSubmit = event => {
      event.preventDefault();
  
      const Provider = {
        token: getCookie("token"),
        adv_id: getCookie("adv_id"),
        type_services: getCookie("type_service"),
        title: this.state.title,
        text_in: this.state.text_in,
        skill_level: this.state.skill_level
      };
      setCookie("provider", JSON.stringify(Provider));
      axios.post(` http://127.0.0.1:8000/api/two_table/create_under_table_advertisement/`, {
        token: Provider['token'],
        adv_id: Provider['adv_id'],
        type_services: Provider['type_services'],
        title: Provider['title'],
        text_in: Provider['text_in'],
        skill_level: Provider['skill_level']
     }, {
        "Content-type": "application/json; charset=UTF-8"}
      )
        .then(res => {
          console.log(res);
          setCookie('id_user', JSON.stringify(res.data));
        })

    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Название:
              <input type="text" name="title" onChange={this.handleChange1}/><br></br>
              Описание:
              <input type="text" name="price" onChange={this.handleChange2} /><br></br>
              Стаж:
              <input type="text" name="data_start" onChange={this.handleChange3} /><br></br>
            
              <button type="submit">Отправить</button>
            </label>
          </form>
          <ModalAdv />
        </div>
      )
    }
  }


export default function ProviderForm_Blok() {
    return <div><ProviderForm /></div>;
  }