import React from 'react';

import Header from '../components/layout/header';
import About from '../components/about/about';
import Footer from '../components/layout/footer';

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default Homepage;