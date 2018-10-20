import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Card({ children, backgroundImage, height, shadow }) {
  return (
    <div
        className={cn('rootBase', {root: !shadow})}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height,
        }}
      >
        <video
          className={cn('video')}
          src="https://coubsecure-s.akamaihd.net/get/b151/p/coub/simple/cw_file/9797a93278f/1b689ed594b9b17f88b2e/gifv_1539470990_5362149_gifv.mp4"
          autoPlay
          loop
          muted
          controls={false}
          height="100%"
          width="100%"
        />
        {shadow ? (
          <div className={cn('overlay', 'root')}>
            {children}
          </div>
        ) : children}
      </div>
  )
}
