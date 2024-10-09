import React from 'react';
import { createContext, useContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';

import './App.css';


import MainPage from './components/MainPage';
import Enter_Blok from './components/Enter';
import Registration_Blok from './components/Registration';
import getCookie from './Cookie/Get_Cookie';
import MainPageAuth from './components/After_Auth/MainPageAuth';
//import Change from './components/After_Auth/Settings1';
import Update from './components/After_Auth/Update';
import Generation_Form1_Blok from './components/After_Auth/Generate_Form1';
import ProviderForm_Blok from './components/After_Auth/ProviderForm';
import ProductForm_Blok from './components/After_Auth/ProductForm';
import IndustryForm_Blok from './components/After_Auth/IndustryForm';


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
  return(
    <div>
      <section>
        <Router>
          <Routes>
            <Route path="*" element={<Navigate to ="/main" replace={true} />} />
            {!!getCookie('token') ? (
              <>
                <Route path="/main" element={<MainPageAuth />} />
                <Route path="/main/generate" element={<Generation_Form1_Blok />} />
                <Route path="/main/generate/provider" element={<ProviderForm_Blok />} />
                <Route path="/main/generate/product" element={<ProductForm_Blok/>} />
                <Route path="/main/generate/industry" element={<IndustryForm_Blok />} />
                <Route path="main/settings" element={<Update />} />
                <Route path="/result" />
                <Route path="/" element={<MainPage />} />
              </>
            ) : (
            <>
              <Route path="/Enter" element={<Enter_Blok />} />
              <Route path="/Regist" element={<Registration_Blok />} />
              <Route path="/" element={<MainPage />} />
            </>
            )}
          </Routes>
        </Router>
      </section>
    </div>  
  )
};

