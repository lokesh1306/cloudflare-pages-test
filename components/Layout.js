import React from 'react';
import Navbar from './Navbar';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
