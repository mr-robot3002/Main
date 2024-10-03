import React from 'react';
import ReactDOM from 'react-dom/client';

import './header.css';
import HeaderAuth from './HeaderAuth';
import Main1 from '../Main1';



export default function MainPageAuth() {
  return(
    <div>
      <section>
        <HeaderAuth />
      </section>
      <section>
        <Main1 />
      </section>
    </div>
  )
};