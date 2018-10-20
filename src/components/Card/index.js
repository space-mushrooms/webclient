import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Card({ children, backgroundImage, height }) {
  return (
    <div
      className={cn('root')}
      style={{backgroundImage: `url(${backgroundImage})`, height}}
    >
      {children}
    </div>
  );
}
