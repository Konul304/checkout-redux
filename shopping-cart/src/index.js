import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Cart from './components/Cart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      {/* <Route path='/cart' element={<Cart/>}/> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
