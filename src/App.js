import classnames from 'classnames/bind';
import React from 'react';
import Navbar from './components/Navbar';
import styles from './App.module.css';

const cn = classnames.bind(styles);

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
