import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import BackLink from '../BackLink';

const cn = classnames.bind(styles);

export default function LaunchCard({title, image, backToTitle, backToUrl}) {
  return (
    <Card boxShadow={false} backgroundImage={image} gradient height="225px">
      <BackLink text={backToTitle} path={backToUrl} marginBottom />
      <div className={cn('title')}>
        {title}
      </div>
    </Card>
  );
}
