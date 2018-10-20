import React from 'react';
import Navbar from './components/Navbar';

export default function App({children}) {
  return (
    <React.Fragment>
      <main role="main">
        {children}
      </main>
      <Navbar />
    </React.Fragment>
  );
}
