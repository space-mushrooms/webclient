import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Card({ children, backgroundImage, video, height, shadow, gradient }) {
  const hasOverlay = shadow || gradient;

  return (
    <div
      className={cn('rootBase', { root: !hasOverlay })}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
      }}
    >
      <video
        className={cn('video')}
        src={video}
        autoPlay
        loop
        muted
        controls={false}
        height="100%"
        width="100%"
      />
      {hasOverlay ? (
        <div className={cn('overlay', 'root',
          { overlayShadow: shadow, overlayGradient: gradient })}
        >
          {children}
        </div>
      ) : children}
    </div>
  )
}
