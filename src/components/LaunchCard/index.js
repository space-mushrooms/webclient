import classnames from 'classnames/bind';
import React, {Component} from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import format from 'date-fns/format'
import LaunchShape from '../../shapes/Launch';
import Timer from '../Timer';

const cn = classnames.bind(styles);

export default class LaunchCard extends Component {
  static propTypes = {
    launch: LaunchShape.isRequired,
  };

  render() {
    return (
      <div>
        <Card backgroundImage={image} video={video}>
          {live && <span className={cn('live')}>LIVE</span>}
          <div>
            <LaunchInfo title="Mission" text={mission} />
            <LaunchInfo title="Rocket" text={rocket} />
          </div>
          <div className={cn('launchTimer')}>
            {rightNow && 'Right now'}
            {shouldDisplayDate && format(now, 'MM/DD/YY')}
            {showTimer && <Timer timestamp={launchTs} />}
          </div>
          <div className={cn('explore')}>
            Explore now
          </div>
        </Card>
      </div>
    );
  }
}
