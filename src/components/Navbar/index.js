import classnames from 'classnames/bind';
import React from 'react';
import {Link} from 'react-router';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Navbar({children}) {
  return (
    <nav className={cn('navbar')}>
      <Link to="/" activeClassName={cn('active')} className={cn('item')}>O</Link>
      <Link className={cn('item')}>O</Link>
      <Link className={cn('item')}>O</Link>
      <Link className={cn('item')}>O</Link>
    </nav>
  );
}
