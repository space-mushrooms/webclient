import PageTransition from 'react-router-page-transition';
import React from 'react';
import Navbar from './components/Navbar';

export default function App({children}) {
  return (
    <React.Fragment>
      <main role="main" key="main">
        <PageTransition timeout={500}>
          {children}
        </PageTransition>
      </main>
      <Navbar />
    </React.Fragment>
  );
}
