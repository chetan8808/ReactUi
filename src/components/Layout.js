import React from 'react';
import Navbaar from './Navbaar';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
      <>
        <Navbaar/><br/>
        <div>{children}</div>
        <Footer/>
      </>
    );
  };
  
export default Layout