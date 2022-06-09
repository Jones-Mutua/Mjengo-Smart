import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  {HomePage } from './pages/Home/index';
// import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { CreatePost } from './components/BlogForm';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage />} />
     <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Register />} />
    <Route path='/addpost' element={<CreatePost />} />
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
