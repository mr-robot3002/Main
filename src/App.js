import React from 'react';
import { createContext, useContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import './css/header.css';
import './css/modal.css';
import Header from './components/Header';
import Main1 from './components/Main1';
import Registration from './components/Registration';
import MainPage from './components/MainPage';
import Enter_Blok from './components/Enter';
import Registration_Blok from './components/Registration';



export default function App() {
  return(
    <div>
      <section>
        <Router>
          <Routes>
            <Route path="/Enter" element={<Enter_Blok />} />
            <Route path="/Regist" element={<Registration_Blok />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </section>
    </div>  
  )
};

