import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import NavBar from './components/navBar';
import ProfilePage from './page/Profile';
import ProductsPage from './page/AllProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryProducts from './page/CategoryPage';
import LoginPage from './page/Login';
import RegisterPage from './page/Register';
import ProtectRouter from './components/protectRotuer';
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from './components/context/Auth/AuthContex';
import Profile from './page/Profile';
import AuthContextProvider from './components/context/Auth/AuthContextProvider';
import ProductDetailsPage from './components/ProductCard';
import { useState } from 'react';
import CategoryCard from './page/CategoryCard';

function App() {
  return (
    <AuthContextProvider >
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <NavBar />
              <Home />
            </div>
          }
        />
       
       <Route
          path="/home"
          element={
            <div className="App">
              <NavBar />
              <Home />
            </div>
          }
        />
         <Route
          path="/profile"
          element={
            <div className="App">
              <NavBar />
              <Profile />
            </div>
          }
        />
        <Route
          path="/products/:id"
          element={
            <div className="App">
              <NavBar />
              <ProductDetailsPage />
            </div>
          }
        />
        <Route
          path="/product/:id"
          element={
            <div className="App">
              <NavBar />
              <ProductDetailsPage />
            </div>
          }
        />
       <Route
          path="/categories/:name"
          element={
            <div className="App">
              <NavBar />
              <CategoryProducts />
            </div>
          }
        />
       
        <Route
          path="/login"
          element={
            <div>
              <NavBar />
              <LoginPage />
            </div>
          }
        />
         <Route
      path="AllProducts"
      element={
        <div>
           <NavBar />
          <ProductsPage />
        </div>
      }
    />
        <Route
          path="/signup"
          element={
            <div>
              <NavBar />
              <RegisterPage />
            </div>
          }
        />

        <Route
          path="/profile"
          element={
            <div>
              <NavBar />
              <ProtectRouter>
                <ProfilePage />
              </ProtectRouter>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
     
  );
}

export default App;
