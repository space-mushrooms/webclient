import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.css';

const cn = classnames.bind(styles);

export default function LaunchBanner() {
  return (
      <div className={cn('banner')}>
        <img alt="" className={cn('image')} src="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg" />
      </div>
  );
}
