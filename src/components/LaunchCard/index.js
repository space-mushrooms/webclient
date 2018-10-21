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
    const {launch, location} = this.props;
    return (
      <div>
        <div className={cn('header')}>
          {(launch && launch.video) ? (
            <video
              className={cn('video')}
              src={launch.video}
              autoPlay
              loop
              muted
              controls={false}
              height="100%"
              width="100%"
            />
          ) : null}
        </div>
      </div>
    );
  }
}
