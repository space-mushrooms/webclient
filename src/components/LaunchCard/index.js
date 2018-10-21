import classnames from 'classnames/bind';
import React, { Component } from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import LaunchShape from '../../shapes/Launch';
import LaunchTimer from '../LaunchTimer';
import BackLink from '../BackLink';

const cn = classnames.bind(styles);

export default class LaunchCard extends Component {
  static propTypes = {
    launch: LaunchShape.isRequired,
  };

  handleTimerComplete = () => {
    this.forceUpdate();
  }

  render() {
    const { launch, backToTitle, backToUrl } = this.props;
    const { image, mission, rocket, video, launchTs } = launch;

    return (
      <Card backgroundImage={image} video={video} shadow height="275px">
        <BackLink text={backToTitle} path={backToUrl} marginBottom />
        <div className={cn('info')}>
          <LaunchInfo title="Mission" text={mission} />
          <LaunchInfo title="Rocket" text={rocket} />
        </div>
        <div className={cn('launchTimer')}>
          <LaunchTimer launchTs={launchTs} onComplete={this.handleTimerComplete} />
        </div>
      </Card>
    );
  }
}
