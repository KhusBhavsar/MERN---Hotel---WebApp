import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import ContactUs from './Components/ContactUs';
import JoinUs from './Components/JoinUs';
import Footer from './Components/Footer';
import { CartProvider } from './context/Context';
import Payment from './Components/Payment';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        <Footer />
      </CartProvider>

    </div>
  );
};

export default App;
