import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router';
const styles = require('./index.css');


const HyperText = ({className, children, asPage, inverseColor}) => {
  const classNames = [
    styles.hyperText,
    asPage ? styles.asPage : '',
    inverseColor ? styles.inverseColor : '',
    className,
  ].join(' ');
  return <div className={classNames}>{children}</div>;
};

HyperText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  asPage: PropTypes.bool,
  inverseColor: PropTypes.bool,
};

HyperText.defaultProps = {
  className: '',
  asPage: false,
  inverseColor: false,
};

// eslint-disable-next-line jsx-a11y/heading-has-content
HyperText.H1 = props => <h1 {...props} className={styles.h1} />;
// eslint-disable-next-line jsx-a11y/heading-has-content
HyperText.H2 = props => <h2 {...props} className={styles.h2} />;
HyperText.UL = props => <ul {...props} className={styles.ul} />;
HyperText.OL = props => <ol {...props} className={styles.ol} />;
HyperText.LI = props => <li {...props} className={styles.li} />;
// eslint-disable-next-line jsx-a11y/anchor-has-content
HyperText.A = props => <a {...props} className={styles.a} />;
HyperText.P = props => <p {...props} className={styles.p} />;
HyperText.Link = props => <Link {...props} className={styles.a} />;
HyperText.Warning = props => <p {...props} className={styles.warning} />;

export default HyperText;
