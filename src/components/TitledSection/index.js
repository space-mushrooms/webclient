import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Reducer from '../Reducer';
import {Link} from 'react-router';

const cn = classnames.bind(styles);

export default function TitledSection({ title, children, path, linkText, marginTop }) {
  return (
    <section className={cn('root')}>
      <Reducer marginTop={marginTop}>
        <div className={cn('titleWrapper')}>
          <h2 className={cn('title')}>{title}</h2>
          {path && <Link className={cn('link')} to={path} >{linkText}</Link>}
        </div>
      </Reducer>
      {children}
    </section>
  );
}
