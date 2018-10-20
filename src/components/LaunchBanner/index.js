import classnames from 'classnames/bind';
import React from 'react';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';

const cn = classnames.bind(styles);

export default function LaunchBanner({backgroundImage, mission, rocket, launchTime}) {
  return (
      <Card backgroundImage={backgroundImage} height="30vh">
        <LaunchInfo title="Mission" text={mission} />
        <LaunchInfo title="Rocket" text={rocket} />
      </Card>
  );
}
