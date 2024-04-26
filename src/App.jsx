import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}



export default App