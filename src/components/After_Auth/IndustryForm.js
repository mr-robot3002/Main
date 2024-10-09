import React from 'react';
import axios from 'axios';
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import { Link } from "react-router-dom";
import ModalAdv from './ModalAdv';

export class IndustryForm extends React.Component {
    state = {
        title: '',
        text_in: '',
        founding_date: ''
    }
  
    handleChange1 = event => {
      this.setState({ title: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ text_in: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ founding_date: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const Industry = {
        token: getCookie("token"),
        adv_id: getCookie("adv_id"),
        type_services: getCookie("type_service"),
        title: this.state.title,
        text_in: this.state.text_in,
        founding_date: this.state.founding_date
      };
      setCookie("industry", JSON.stringify(Industry));
      axios.post(` http://127.0.0.1:8000/api/two_table/create_under_table_advertisement/`, {
        token: getCookie("token"),
        adv_id: Industry['adv_id'],
        type_services: Industry['type_services'],
        title: this.state.title,
        text_in: this.state.text_in,
        founding_date: this.state.founding_date
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
              Дата Основания:
              <input type="text" name="founding_date" onChange={this.handleChange3} /><br></br>
            </label>
            <button type="submit">Отправить</button>
          </form>
          <ModalAdv />
        </div>
      )
    }
  }


export default function IndustryForm_Blok() {
    return <div><IndustryForm /></div>;
  }