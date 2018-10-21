import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import { Link } from 'react-router';
import format from 'date-fns/format'
import LaunchShape from '../../shapes/Launch';
import Timer from '../Timer';

const cn = classnames.bind(styles);

const TIMER_DATE_THRESHOLD = 1000 * 60 * 60 * 24 * 1; // 5 days

class LaunchBanner extends Component {
  static propTypes = {
    launch: LaunchShape.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.refCard = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  getPathname() {
    return `/launches/${this.props.launch.id}`;
  }

  handleClick = evt => {
    evt.preventDefault();
    const video = this.refCard.current && this.refCard.current.getVideo();

    this.props.push({
      pathname: this.getPathname(),
      state: {
        clickType: 'launch',
        clickPayload: {
          launch: this.props.launch,
          rect: this.ref.current.getBoundingClientRect(),
          currenctTime: video && video.currentTime,
        },
      },
    });
  }

  handleTimerComplete = () => {
    this.forceUpdate();
  }

  render() {
    const { image, mission, rocket, video, launchTs, streamTs } = this.props.launch;
    const now = new Date();
    const shouldDisplayDate = (streamTs - TIMER_DATE_THRESHOLD) > now;
    const live = streamTs < now;
    const rightNow = launchTs < now;
    const showTimer = !rightNow && !shouldDisplayDate;

    return (
      <div ref={this.ref}>
        <Link
          onClick={this.handleClick}
          to={this.getPathname()}
          className={cn('link')}
        >
          <Card ref={this.refCard} backgroundImage={image} video={video} shadow height="390px">
            {live && <span className={cn('live')}>LIVE</span>}
            <div className={cn('info')}>
              <LaunchInfo title="Mission" text={mission} />
              <LaunchInfo title="Rocket" text={rocket} />
            </div>
            <div className={cn('launchTimer')}>
              {rightNow && 'Right now'}
              {shouldDisplayDate && format(now, 'MM/DD/YY')}
              {showTimer && <Timer timestamp={launchTs} onComplete={this.handleTimerComplete} />}
            </div>
            <div className={cn('explore')}>
              Explore now
            </div>
          </Card>
        </Link>
      </div>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ push }, dispatch))(LaunchBanner);
