import React from 'react';
import { createContext, useContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Main1 from './components/Main1';
import Registration from './components/Registration';
import MainPage from './components/MainPage';
import Enter_Blok from './components/Enter';
import Registration_Blok from './components/Registration';
import getCookie from './Cookie/Get_Cookie';
import MainPageAuth from './components/After_Auth/MainPageAuth';
import { Modal_Reg } from './components/Registration';

/*function isAuth() {
  if (getCookie('token') != '')
    return true;
  else
    return false; 
}*/

const PrivateRoute = () => {
  return !!getCookie('token') ? (
    <Outlet /> 
  ): (
    <Navigate to = "/Enter" />
  )
}

export default function App() {
  console.log(getCookie('token'))
  const [isModal1, setModal1] = React.useState(true);
  return(
    <div>
      <section>
        <Router>
          <Routes>
            <Route path="*" element={<Navigate to ="/" replace={true} />} />
            {!!getCookie('token') ? (
              <>
                <Route path="/main" element={<MainPageAuth />} />
                <Route path="/main/settings" element={<MainPageAuth />} />
              </>
            ) : (
            <>
              <Route path="/Enter" element={<Enter_Blok />} />
              <Route path="/Regist" element={<Registration_Blok />} />
              <Route path="/Regist/Regist1" element={
                <Modal_Reg
                  isVisible={isModal1}
                  title="Подтверждение"
                  content={<div>Подтверждение почты</div>}
                  footer={<button>Отправить</button>}
                  onClose={() => setModal1(false)}
                />} />
              <Route path="/" element={<MainPage />} />
            </>
            )}
          </Routes>
        </Router>
      </section>
    </div>  
  )
};

