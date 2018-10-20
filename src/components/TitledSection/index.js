import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.css';
import Reducer from '../Reducer';
import {Link} from 'react-router';

const cn = classnames.bind(styles);

export default function TitledSection({ title, children, path }) {
  return (
    <section className={cn('root')}>
      <Reducer marginTop>
        <div className={cn('titleWrapper')}>
          <h2 className={cn('title')}>{title}</h2>
          {path && <Link className={cn('link')} to={path} >See all</Link>}
        </div>
      </Reducer>
      {children}
    </section>
  );
}
