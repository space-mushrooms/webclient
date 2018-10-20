import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import LaunchShape from '../../shapes/Launch';

const cn = classnames.bind(styles);

const TIMER_DATE_THRESHOLD = 1000 * 60 * 60 * 24 * 5; // 5 days

export default function LaunchBanner({launch}) {
  const { image, mission, rocket, video, launchTs, streamTs } = launch;
  const now = Date.now();
  const shouldDisplayDate = (streamTs + TIMER_DATE_THRESHOLD) > now;
  const rightNow = streamTs < now && launchTs < now;

  return (
    <Card backgroundImage={image} video={video} shadow height="300px">
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

LaunchBanner.propTypes = {
  launch: LaunchShape.isRequired,
};
