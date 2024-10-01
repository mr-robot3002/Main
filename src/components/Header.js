import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Enter_Blok from './Enter';
import '../App.css';
import '../css/header.css';


export default function Header() {
 
  return (
    <div className="Header">
      <div className='Logo'>VORON SCRIPT</div>

      <ul id="yakors">
        <li><a href="#main2"  title="Link" >Примеры работ</a></li>
        <li><a href="#main3"  title="Link" >Тарифы</a></li>
        <li><a href="#main4"  title="Link" >Контакты</a></li>
      </ul>
      
      
      <ul id="regent">
        <nav>
          <ul>
            
            <li>
              <Link to="/Enter"><button >Войти</button></Link>
            </li>

            <li><Link to="/Regist"><button>Регистрация</button></Link></li>
          </ul>
        </nav>
        

      </ul>
      
    </div>
  );
}

