import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  getVideo() {
    return this.videoRef.current;
  }

  render() {
    const {children, backgroundImage, video, height, shadow, gradient, borderRadius} = this.props;
    const hasOverlay = shadow || gradient;

    return (
      <div
        className={cn('rootBase', {root: !hasOverlay, borderRadius: borderRadius})}
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
