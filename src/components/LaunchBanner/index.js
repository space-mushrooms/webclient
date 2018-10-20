import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import { Link } from 'react-router';
import format from 'date-fns/format'

const cn = classnames.bind(styles);

const TIMER_DATE_THRESHOLD = 1000 * 60 * 60 * 24 * 5; // 5 days

export default function LaunchBanner({ backgroundImage, mission, rocket, launchTime, live }) {
  const now = new Date();
  const shouldDisplayDate = (launchTime - TIMER_DATE_THRESHOLD) > now;
  const rightNow = live && launchTime < now;

  return (
    <Link to="/" className={cn('root')}>
      <Card backgroundImage={backgroundImage} shadow height="390px">
        {live && <span className={cn('live')}>LIVE</span>}
        <div>
          <LaunchInfo title="Mission" text={mission} />
          <LaunchInfo title="Rocket" text={rocket} />
        </div>
        <div className={cn('launchTimer')}>
          {rightNow && 'Right now'}
          {shouldDisplayDate && format(now, 'MM/DD/YY')}
        </div>
        <div className={cn('explore')}>
          Explore now
        </div>
      </Card>
    </Link>
  );
}
