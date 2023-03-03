import React from 'react'
import './App.css'

import {Footer, Blog, Possibility, Trade, Header, } from './container';
import {CTA, Brand, Navbar} from './components';
import SocialLinks from './components/socialLinks/SocialLinks';
import Techs from './container/techs/Techs';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Trade />
      {/*<Features />*/}
      <Possibility />
      <Techs />
      <CTA />
      <Blog />
      <Footer />

      <SocialLinks />
    </div>
  )
}

export default App