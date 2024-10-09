import React, { useState } from 'react';
import axios from 'axios';
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import { Link } from "react-router-dom";

export class Generation_Form1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type_services: '', //услуга, товар, предприятие
        platforms: '', //Яндекс
        price: '',
        data_start: '', //not obligatory
        data_finish: '', // not obligatory
        economic_works: ''
      };
    }

    handleClick = (e) => {
      setTimeout(function () {
        if (e == 'Товар')
          window.location.href = "/main/generate/product"
        else if (e == 'Услуга')
          window.location.href = "/main/generate/provider"
        else if (e == 'Предприятие')
          window.location.href = "/main/generate/industry"
      }.bind(this), 3000);
    }

    handleChange1 = event => {
      this.setState({ type_services: event.target.value });
    }
    handleChange2 = event => {
      this.setState({ platforms: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ price: event.target.value });
    }
    handleChange4 = event => {
        this.setState({ data_start: event.target.value });
    }
    handleChange5 = event => {
        this.setState({ data_finish: event.target.value });
    }
    handleChange6 = event => {
      this.setState({ economic_works: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const Advertisement = {
        token: getCookie("token"),
        type_services: this.state.type_services,
        platforms: this.state.platforms,
        price: this.state.price,
        data_start: this.state.data_start,
        data_finish: this.state.data_finish,
        economic_works: this.state.economic_works
      };
      setCookie('type_service', Advertisement['type_services'])

      axios.post(` http://127.0.0.1:8000/api/advertisement/create_first_table/`, {
        token: getCookie("token"),
        type_services: this.state.type_services,
        platforms: this.state.platforms,
        price: this.state.price,
        data_start: this.state.data_start,
        data_finish: this.state.data_finish,
        economic_works: this.state.economic_works
     }, {
        "Content-type": "application/json; charset=UTF-8"}
      )
        .then(res => {
          console.log(res);
          setCookie('adv_id', res.data);
        })
        .catch((error) => {
          console.log(error);
        });

    }
    
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <label htmlFor="type_services">Выберите сервис:</label>
              <select id="service" name="type_services" onChange={this.handleChange1}>
                <option value="Услуга">Услуга</option>
                <option value="Товар">Товар</option>
                <option value="Предприятие">Предприятие</option>
              </select><br></br>
              Platforms:
              <input type="text" name="platforms" onChange={this.handleChange2}/><br></br>
              Рrice:
              <input type="number" name="price" onChange={this.handleChange3} /><br></br>
              Data_start:
              <input type="text" name="data_start" onChange={this.handleChange4} /><br></br>
              Data_finish:
              <input type="text" name="data_finish" onChange={this.handleChange5} /><br></br>
              economic_works:
              <input type="text" name="economic_works" onChange={this.handleChange6} /><br></br>
            
              <button type="submit" onClick={() => this.handleClick(this.state.type_services)}>Отправить</button>
            </label>
          </form>
        </div>
      )
    }
  }


export default function Generation_Form1_Blok() {
    return <div><Generation_Form1 /></div>;
  }