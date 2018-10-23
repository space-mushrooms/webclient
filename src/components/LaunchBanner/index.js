import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from './index.module.css';
import Card from '../Card';
import LaunchInfo from '../LaunchInfo';
import Link from '../PageTransition/Link';
import TransitionType, {createTransition} from '../PageTransition/Type';
import LaunchShape from '../../shapes/Launch';
import LaunchTimer from '../LaunchTimer';

const cn = classnames.bind(styles);

class LaunchBanner extends Component {
  static propTypes = {
    launch: LaunchShape.isRequired,
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  getPathname() {
    return `/main/launches/${this.props.launch.id}`;
  }

  createTransition = () => createTransition(TransitionType.EXPAND, {
    rect: this.ref.current.getBoundingClientRect(),
  });

  handleTimerComplete = () => {
    this.forceUpdate();
  }

  render() {
    const { image, mission, rocket, video, launchTs, streamTs } = this.props.launch;
    const now = Date.now();
    const live = streamTs < now;

    return (
      <div ref={this.ref}>
        <Link transition={this.createTransition} to={this.getPathname()} className={cn('link')}>
          <Card borderRadius backgroundImage={image} video={video} shadow height="390px">
            {live && <span className={cn('live')}>LIVE</span>}
            <div>
              <LaunchInfo title="Mission" text={mission} />
              <LaunchInfo title="Rocket" text={rocket} />
            </div>
            <LaunchTimer launchTs={launchTs} onComplete={this.handleTimerComplete} />
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
