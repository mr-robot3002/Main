import React from 'react';
import axios from 'axios';
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import { Link } from "react-router-dom";
import ModalAdv from './ModalAdv';

export class ProductForm extends React.Component {
    state = {
        title: '',
        text_in: '',
        details: ''
    }
  
    handleChange1 = event => {
      this.setState({ title: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ text_in: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ details: event.target.value });
    }
  


    handleSubmit = event => {
      event.preventDefault();
  
      const Product = {
        token: getCookie("token"),
        adv_id: getCookie("adv_id"),
        type_services: getCookie("type_service"),
        title: this.state.title,
        text_in: this.state.text_in,
        details: this.state.details
      };
      setCookie("product", JSON.stringify(Product));
      axios.post(` http://127.0.0.1:8000/api/two_table/create_under_table/`, {
        token: getCookie("token"),
        adv_id: Product['adv_id'],
        type_services: Product['type_services'],
        title: this.state.title,
        text_in: this.state.text_in,
        details: this.state.details
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Название:
              <input type="text" name="title" onChange={this.handleChange1}/><br></br>
              Описание:
              <input type="text" name="price" onChange={this.handleChange2} /><br></br>
              Детали:
              <input type="text" name="details" onChange={this.handleChange3} /><br></br>
            </label>
            <button type="submit">Отправить</button>
          </form>
          <ModalAdv />
        </div>
      )
    }
  }


export default function ProductForm_Blok() {
    return <div><ProductForm /></div>;
  }