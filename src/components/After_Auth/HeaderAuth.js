import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import '../../index.css'
//import './header.css';

/* Установите ширину боковой панели на 250 пикселей (показать его) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Установите ширину боковой панели в 0 (скройте ее) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 
export default function HeaderAuth() {
 
  return (
    <div className="flex flex-row w-52 p-3 columns-7 text-center font-inter font-bold">
            <div className="flex-1 bg-blue-600 rounded-full font-inter">VORON</div>
            <div className="flex-1 w-24 px-0.5 ">SCRIPT</div>
            <div className="flex-1 basis-1/2 ml-60 font-inter hover:underline hover:text-blue-600" ><a href="/main"  title="Главная" >ГЛАВНАЯ</a></div> 
            <div className="flex-initial w-16 md:w-32 lg:w-48 ml-12 font-inter hover:underline hover:text-blue-600" ><a href="/projects"  title="Проекты">ПРОЕКТЫ</a></div> 
            <div className="flex-none w-52 ml-12 font-inter hover:underline hover:text-blue-600" ><a href="/main/settings"  title="Настойки генерации">НАСТРОЙКИ ГЕНЕРАЦИИ</a></div> 
            <div className="flex-none ml-60 text-white bg-blue-600 rounded-full font-inter hover:text-black" ><a href="/main/generate" title="Link" id="generate_add">СОЗДАТЬ РЕКЛАМУ</a></div> 

      
      <div id="mySidepanel" className="sidepanel">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">О Нас</a>
        <a href="#">Услуги</a>
        <a href="#">Клинты</a>
        <a href="#">Контакт</a>
      </div>

      <button className="openbtn" onClick={openNav}> VS </button>

      


            
      <div id='line'></div>
    </div>
  );
}

