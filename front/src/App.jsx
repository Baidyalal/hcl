import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import './App.css'

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Registration from './Registration';
import Booking from './Booking';
import User from './User';
import Home from './Home';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<User />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
