import classnames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router';
import AchievementIcon from '../AchievementIcon';
import styles from './index.module.css';

const cn = classnames.bind(styles);

function Item(props) {
  return <Link activeClassName={cn('active')} className={cn('item')} {...props} />;
}

export default function Navbar({ children }) {
  return (
    <React.Fragment>
      <nav className={cn('navbar')}>
        <Item to="/">O</Item>
        <Item to="/schedule">O</Item>
        <Item to="/some">O</Item>
        <Item to="/profile">
          <AchievementIcon level={AchievementIcon.Level.COLONEL} />
        </Item>
      </nav>
      <div className={cn('navbarSpacer')} />
    </React.Fragment>
  );
}
