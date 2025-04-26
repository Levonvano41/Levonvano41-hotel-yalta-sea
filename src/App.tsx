import React from 'react';
import { Anchor, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <Hero />
      <Booking />
      <Rooms />
      <Amenities />
      <Gallery />
      <SpecialOffers />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;