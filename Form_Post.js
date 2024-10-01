// https://habr.com/ru/companies/timeweb/articles/574000/
import { useState, useEffect } from 'react'
import simpleFetch from 'very-simple-fetch'
export { simpleFetch }
//Функция для обеззараживания введенных пользователем данных и удаления из них лишних пробелов может выглядеть так:
export const escapeAndTrim = (str) =>
    str
      .replace(/[<>&'"/]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim()

//функция для проверки заполненности обязательных полей 
export const isEmpty = (fields) => Object.values(fields).some((field) => !field)

// Функция Хука
export default function useSimpleForm({
    initialData,
    url,
    method = 'POST',
    required = true,
    validators,
    messages,
    onChange,
    onSubmit,
    fetchOptions
   }) {
    // реализация хука
   }

