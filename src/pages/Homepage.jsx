import React from 'react'
import Navbar from '../components/Navbar';
import Midpage from '../components/Midpage';
import ChocolateSection from '../components/ChocolateSection';
import ExploreSection from '../components/ExploreSection';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Transformation from '../components/Transformation';
import Carosal from '../components/Carosal';

const Homepage = () => {
    return (
    <div className="overflow-x-hidden bg-[#F5F5F5]">
      <Midpage />
      <ChocolateSection />
      <ExploreSection />
      <Partners />
      <Transformation />
      <Carosal />
    </div>
  );
}

export default Homepage