import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, Link, Navigate } from "react-router-dom";
import setCookie from "../../Cookie/Set_Cookie";
import getCookie from "../../Cookie/Get_Cookie";
import Main1 from "../Main1";
//import Save from "./Save";

//let User = JSON.parse(getCookie("user"));

Update = () => {
  const [First_name, setFirst_name] = useState(User.first_name);
  const [Second_name, setSecond_name] = useState(User.second_name);
  const [Last_name, setLast_name] = useState(User.last_name);
  const [Email, setEmail] = useState(User.email);
  const [Password, setPassword] = useState(User.password);

  function handleChange1(event) {
    setFirst_name(event.target.value);
    User['first_name']=event.target.value;
    setCookie("user", event.target.value);

  }
  function handleChange2(event) {
    setSecond_name(event.target.value);
    setCookie("User22", event.target.value);
  }
  function handleChange3(event) {
    setLast_name(event.target.value);
    setCookie("User23", event.target.value);
  }
  function handleChange4(event) {
    setEmail(event.target.value);
    setCookie("User24", event.target.value);
  }
  function handleChange5(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={Save}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={First_name}
            onChange={handleChange1}
          />
          <br></br>
          Second Name:
          <input
            type="text"
            name="second_name"
            value={Second_name}
            onChange={handleChange2}
          />
          <br></br>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={Last_name}
            onChange={handleChange3}
          />
          <br></br>
          Email:
          <input
            type="email"
            name="email"
            value={Email}
            //onChange={handleChange4}
          />
          <br></br>
          Password:
          <input type="password" name="password" onChange={handleChange5} />
          <br></br>
        </label>

        <button>Сохранить</button>
        <br></br>
      </form>

      <Link to="/Delete" title="link" id="pasko">
        Удалить
      </Link>

      <Link to="/Main1" title="link" id="pasko">
        Main1
      </Link>
    </div>
  );
};

export default function Update() {}
