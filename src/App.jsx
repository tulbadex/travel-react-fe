import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/header'
import Footer from './component/Footer/footer'
import {
  Home,
  Login,
  Hotel,
  Package,
  ForgotPasswordPage,
  ResetPasswordPage
} from './page'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes, Route, Outlet, Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotel />} />
        <Route path='/packages' element={<Package />} />
        <Route path='/login' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
