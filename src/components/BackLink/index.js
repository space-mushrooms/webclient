import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.module.css';
import {Link} from 'react-router';

const cn = classnames.bind(styles);

export default function BackLink({ path, text, marginBottom }) {
  return (
    <Link to={path} className={cn('backLink', marginBottom && 'marginBottom' )}>
      <svg className={cn('icon')} width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.75946 0.412269L0.395654 9.40223C-0.131885 9.90796 -0.131885 10.7522 0.395654 11.26L9.75946 20.2479C10.3337 20.7993 11.2403 20.7993 11.8146 20.2479C12.4221 19.6643 12.4221 18.6923 11.8146 18.1077L3.97212 10.5788C3.82985 10.4428 3.82985 10.2174 3.97212 10.0814L11.8146 2.55254C12.4221 1.96892 12.4221 0.996923 11.8146 0.412269C11.5269 0.138115 11.1572 0 10.7875 0C10.4168 0 10.0471 0.138115 9.75946 0.412269Z" fill="white" />
      </svg>
      <span className={cn('text')}>{text}</span>
    </Link>
  )
}

BackLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

