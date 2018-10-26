import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export const CardReducer = function({children}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  getVideo() {
    return this.videoRef.current;
  }

  render() {
    const {children, backgroundImage, video, height, shadow, boxShadow = true, gradient, borderRadius} = this.props;
    const hasOverlay = shadow || gradient;

    return (
      <div
        className={cn('rootBase', {
          root: !hasOverlay,
          boxShadow: boxShadow,
          borderRadius: borderRadius
        })}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height,
        }}
      >
        <video
          className={cn('video')}
          src={video}
          autoPlay
          playsInline
          loop
          muted
          controls={false}
          height="100%"
          width="100%"
        />
        {hasOverlay ? (
          <div className={cn('overlay', 'root', {
              overlayShadow: shadow,
              overlayGradient: gradient,
              borderRadius,
            })}>
            {children}
          </div>
        ) : children}
      </div>
    )
  }
}
