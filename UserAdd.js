import React from 'react';
const First_name = document.getElementById('first_name');

const axios = require('axios');
axios
.post('https://myfakeapi.com/api/users/', {
firstName: First_name,
lastName: 'Moore'
}) // Использование post-запроса, с указанием пользователя
.then((response) => { // Получение данных и их обработка
console.log(response.data);})
.catch((error) => { // Если запрос не будет выполнен, то ошибка выводится в терминал
console.error(error);});