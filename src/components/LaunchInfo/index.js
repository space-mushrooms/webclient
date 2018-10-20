import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function LaunchInfo({ title, text }) {
  return (
    <div className={cn('launchInfo')}>
      <p className={cn('title')}>{title}</p>
      <p className={cn('text')}>{text}</p>
    </div>
  );
}
