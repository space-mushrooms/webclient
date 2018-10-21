import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router';
import styles from './index.module.css';

const cn = classnames.bind(styles);

const HyperText = ({className, children}) => {
  return <div className={cn('hyperText', className)}>{children}</div>;
};

HyperText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HyperText.defaultProps = {
  className: '',
};

// eslint-disable-next-line jsx-a11y/heading-has-content
HyperText.H1 = props => <h1 {...props} className={cn('h1')} />;
// eslint-disable-next-line jsx-a11y/heading-has-content
HyperText.H2 = props => <h2 {...props} className={cn('h2')} />;
HyperText.UL = props => <ul {...props} className={cn('ul')} />;
HyperText.OL = props => <ol {...props} className={cn('ol')} />;
HyperText.LI = props => <li {...props} className={cn('li')} />;
// eslint-disable-next-line jsx-a11y/anchor-has-content
HyperText.A = props => <a {...props} className={cn('a')} />;
HyperText.P = props => <p {...props} className={cn('p')} />;
HyperText.Link = props => <Link {...props} className={cn('a')} />;
HyperText.Warning = props => <p {...props} className={cn('warning')} />;

export default HyperText;
