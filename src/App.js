import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import RegisterBus from './Pages/RegisterBus';
import RegisterCustomer from './Pages/RegisterCustomer';
import ReserveSeat from './Pages/ReserveSeat';
import DisplayReservations from './Pages/DisplayReservations';
import DisplayCustomers from './Pages/DisplayCustomers';
import { getCustomerStack } from './Services/CustomerService';

function App() {
  const [customers, setCustomers] = useState([]);

  const refreshCustomers = async () => {
    try {
      const data = await getCustomerStack();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  useEffect(() => {
    refreshCustomers();
  }, []);

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/RegisterBus">Register Bus</Link>
          <Link className="mr-4" to="/RegisterCustomer">Register Customer</Link>
          <Link className="mr-4" to="/ReserveSeat">Reserve Seat</Link>
          <Link className="mr-4" to="/DisplayReservations">Display Reservations</Link>
          <Link className="mr-4" to="/DisplayCustomers">Display Customers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegisterBus" element={<RegisterBus />} />
          <Route path="/RegisterCustomer" element={<RegisterCustomer refreshCustomers={refreshCustomers} />} />
          <Route path="/ReserveSeat" element={<ReserveSeat />} />
          <Route path="/DisplayReservations" element={<DisplayReservations />} />
          <Route path="/DisplayCustomers" element={<DisplayCustomers customers={customers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;