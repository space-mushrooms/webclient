import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router';
import Card from '../Card';

const cn = classnames.bind(styles);

export default function FactCard({ image, fact, to, description }) {
  return (
    <Link className={cn('link')} to={to}>
      <Card gradient backgroundImage={image} height="210px">
        <div className={cn('cardFact')}>
          {fact}
        </div>
        {description && <div className={cn('cardDescription')}>{description}</div>}
      </Card>
    </Link>
  )
}
