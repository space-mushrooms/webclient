import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import swipeJS from 'swipe-js-iso';
import styles  from './index.module.css';

const cn = classnames.bind(styles);

export default class Swipe extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    childClassName: PropTypes.string,
    className: PropTypes.string,
    fullscreen: PropTypes.bool,
    swipeOptions: PropTypes.shape({
      slidesPerView: PropTypes.string,
      startSlide: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transitionEnd: PropTypes.func,
    }),
  };

  static defaultProps = {
    childClassName: '',
    className: '',
    fullscreen: false,
    swipeOptions: {
      continuous: false,
    },
  };

  constructor(props) {
    super(props);

    this.mounted = true;
    this.element = null;
    this.swipe = null;
  }

  componentDidMount() {
    this.mounted = true;
    setTimeout(() => {
      if (this.mounted) {
        this.swipe = swipeJS(this.element, this.props.swipeOptions);
        this.forceUpdate();
      }
    }, 500);
  }

  componentDidUpdate() {
    this.swipe.setup();
  }

  componentWillUnmount() {
    this.mounted = false;
    if (this.swipe) {
      this.swipe.kill();
      this.swipe = null;
    }
  }

  getNumSlides() {
    return this.swipe.getNumSlides();
  }

  getPos() {
    return this.swipe.getPos() % this.swipe.getNumSlides();
  }

  next() {
    if (this.swipe) {
      this.swipe.next();
    }
  }

  prev() {
    if (this.swipe) {
      this.swipe.prev();
    }
  }

  slide(...args) {
    if (this.swipe) {
      this.swipe.slide(...args);
    }
  }

  render() {
    const {childClassName, className, children, fullscreen} = this.props;
    return (
      <div className={cn('wrapper', {mock: !this.swipe})}>
        <div ref={element => { this.element = element; }} className={cn('swipe', className, {fullscreen})}>
          <div className={cn('inner')}>
            {React.Children.map(children, child => (
              <div className={cn('child', childClassName || child.props.className)}>
                <div className={cn('childContent')}>
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
