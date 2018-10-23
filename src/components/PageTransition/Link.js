import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import Type, {createTransition} from './Type';
import {setPageTransition} from '../../reducers/pageTransition';

class TransitionLink extends PureComponent {
  static propTypes = {
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onClick: PropTypes.func,
    push: PropTypes.func.isRequired,
    setPageTransition: PropTypes.func.isRequired,
  };

  static defaultProps = {
    transition: createTransition(Type.SLIDE),
    onClick: null,
  };

  getPageTransition(transition, evt) {
    switch (typeof transition) {
      case 'function':
        return transition(evt);
      case 'string':
        return createTransition(transition);
      default:
        return transition || null;
    }
  }

  handleClick = (evt) => {
    const {onClick, to, push} = this.props;
    const transition = this.getPageTransition(this.props.transition);

    if (onClick) {
      onClick(evt);
    }

    if (transition) {
      evt.preventDefault();
      push(to);
      this.props.setPageTransition(transition);
    }
  };

  render() {
    const props = {
      ...this.props,
      onClick: this.handleClick,
    };
    delete props.setPageTransition;
    delete props.transition;
    delete props.push;

    return <Link {...props} />;
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({push, setPageTransition}, dispatch)
)(TransitionLink);
