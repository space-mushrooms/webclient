import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Reducer({children, marginBottom, marginTop}) {
  if (!children) {
    return null;
  }

  return (
    <div className={cn('reducer', {marginBottom, marginTop})}>
      {children}
    </div>
  );
}

Reducer.propTypes = {
  children: PropTypes.node,
  marginBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
};

Reducer.defaultProps = {
  children: null,
  marginBottom: false,
  marginTop: false,
};

