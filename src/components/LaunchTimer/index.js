import React from 'react';
import styles from './index.module.css';
import format from 'date-fns/format'
import Timer from '../Timer';
import classnames from 'classnames/bind';
import { TIMER_DATE_THRESHOLD } from '../../constants/timer';

const cn = classnames.bind(styles);

export default function LaunchTimer({ launchTs, onComplete }) {
  const now = new Date();
  const shouldDisplayDate = (launchTs - TIMER_DATE_THRESHOLD) > now;
  const rightNow = launchTs < now;
  const showTimer = !rightNow && !shouldDisplayDate;

  return (
    <div className={cn('launchTimer')}>
      {rightNow && 'Right now'}
      {shouldDisplayDate && format(now, 'MM/DD/YY')}
      {showTimer && <Timer timestamp={launchTs} onComplete={onComplete} />}
    </div>
  )
}
