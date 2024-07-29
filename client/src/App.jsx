import React from 'react'
import {BrowserRouter, Routes, Route, useLocation, useMatch} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import Logout from './pages/Logout'
import Footer from './components/Footer'
import AdminLayout from './components/Layout/AdminLayout'


const AppContent = () => {
  const location = useLocation();

  const routes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/register',
    '/login',
    '/admin',
    '/admin/users',
    '/admin/contacts',
    '/about/',
    '/contact/',
    '/services/',
    '/register/',
    '/login/',
    '/admin/',
    '/admin/users/',
    '/admin/contacts/',
  ];

  const isKnownRoute = routes.includes(location.pathname);

  return (
    <>
      {isKnownRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="contacts" element={<AdminContacts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;