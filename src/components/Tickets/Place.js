import classnames from 'classnames/bind';
import React from 'react';
import TicketShape from '../../shapes/Ticket';
import styles from './Place.module.css';

const cn = classnames.bind(styles);

export default function Place() {
  return (
    <div className={cn('place')}>
      <img
        className={cn('avatar')}
        alt="Kennedy Space Center"
        src="https://www.clipartmax.com/png/middle/12-128728_kennedy-space-center-clipart-kennedy-space-center-orlando-logo.png"
      />
      <div className={cn('content')}>
        <div className={cn('title')}>Kennedy Space Center, USA</div>
        <div className={cn('date')}>Oct 26, 2018</div>
      </div>
    </div>
  );
}
