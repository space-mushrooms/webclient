import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import swipeJS from 'swipe-js-iso';
import styles  from './index.css';

const cn = classnames.bind(styles);

export default class Swipe extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    childClassName: PropTypes.string,
    className: PropTypes.string,
    fullscreen: PropTypes.bool,
    swipeOptions: PropTypes.shape({
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
    swipeOptions: null,
  };

  constructor(props) {
    super(props);

    this.element = null;
    this.swipe = null;
  }

  componentDidMount() {
    this.swipe = swipeJS(this.element, this.props.swipeOptions);
  }

  componentDidUpdate() {
    this.swipe.setup();
  }

  componentWillUnmount() {
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
      <div ref={element => { this.element = element; }} className={cn('swipe', className, {fullscreen})}>
        <div className={cn('inner')}>
          {React.Children.map(children, child => (
            <child.type {...child.props} className={cn('child', childClassName || child.props.className)} />
          ))}
        </div>
      </div>
    );
  }
}
