import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import { Link } from 'react-router';
import format from 'date-fns/format'
import LaunchShape from '../../shapes/Launch';

const cn = classnames.bind(styles);

const TIMER_DATE_THRESHOLD = 1000 * 60 * 60 * 24 * 5; // 5 days

export default function LaunchBanner({launch}) {
  const { image, mission, rocket, video, launchTs, streamTs, id } = launch;
  const now = new Date();
  const shouldDisplayDate = (streamTs - TIMER_DATE_THRESHOLD) > now;
  const live = streamTs < now
  const rightNow = live && launchTs < now

  return (
    <Link to={`/launches/${id}`} className={cn('root')}>
      <Card backgroundImage={image} video={video} shadow height="390px">
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

LaunchBanner.propTypes = {
  launch: LaunchShape.isRequired,
};
