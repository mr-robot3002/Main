import React, { useEffect, useState } from "react";
import axios from "axios";
import getCookie from "../../Cookie/Get_Cookie";

//let User = JSON.parse(getCookie("user"));

function Save(event) {
  event.preventDefault();
  axios.post(
    `http://127.0.0.1:8000/api/account/update/`,
    {
      token: getCookie("token"),
      first_name: User.first_name,
      second_name: User.second_name,
      last_name: User.last_name,
    },
    {
      "Content-type": "application/json; charset=UTF-8",
    }
  );
}

export default Save;
