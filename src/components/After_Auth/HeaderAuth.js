import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import './header.css';


export default function HeaderAuth() {
 
  return (
    <div className="Header">
      <div id='Logo'>
        <div id='voron'>VORON</div>
        <div id='script'>SCRIPT</div>
      </div>

      <ul id="menu">
        <li><a href="/main"  title="Link" id="main_link" >ГЛАВНАЯ</a></li>
        <li><a href="/projects"  title="Link" id="projects" >ПРОЕКТЫ</a></li>
        <li><a href="/generation_settings"  title="Link" id="settings_generations">НАСТРОЙКИ ГЕНЕРАЦИИ</a></li>
        <div><a href="/generate_add" title="Link" id="generate_add">СОЗДАТЬ РЕКЛАМУ</a></div>
        <li>
              <button className="account">a</button>
        </li>
      </ul>
      

      


            
      <div id='line'></div>
    </div>
  );
}

