import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';

const cn = classnames.bind(styles);

const TIMER_DATE_THRESHOLD = 1000 * 60 * 60 * 24 * 5; // 5 days

export default function LaunchBanner({ backgroundImage, mission, rocket, launchTime, live }) {
  const now = Date.now();
  const shouldDisplayDate = (launchTime + TIMER_DATE_THRESHOLD) > now;
  const rightNow = true//live && launchTime < now;

  return (
    <Card backgroundImage={backgroundImage} shadow height="300px">
      <div>
        <LaunchInfo title="Mission" text={mission} />
        <LaunchInfo title="Rocket" text={rocket} />
      </div>
      <div className={cn('launchTimer')}>
        {rightNow && 'Right now'}
      </div>
      <button className={cn('exporeButton')}>
        Expore now
      </button>
    </Card>
  );
}
