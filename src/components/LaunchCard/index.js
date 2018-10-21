import BackLink from '../BackLink';
import Card from '../Card';
import classnames from 'classnames/bind';
import HyperText from '../HyperText';
import LaunchInfo from '../LaunchInfo';
import LaunchShape from '../../shapes/Launch';
import LaunchTimer from '../LaunchTimer';
import Place from '../Tickets/Place';
import React, { Component } from 'react';
import Reducer from '../Reducer';
import styles from './index.module.css';
import tickets from '../../mock/tickets';
import Tickets from '../Tickets';
import {Tweet} from 'react-twitter-widgets'

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
      <React.Fragment>
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
        <Reducer>
          <HyperText>
            <HyperText.H2>About</HyperText.H2>
            <HyperText.P>Falcon Heavy has the highest payload capacity of any currently operational launch vehicle, and the fourth-highest capacity of any rocket ever built, trailing the American Saturn V and the Soviet Energia and N1.</HyperText.P>
            <HyperText.H2>Launches 🚀</HyperText.H2>
            <HyperText.UL>
              <HyperText.LI>
                February 6, 2018<br />
                <HyperText.Link to="/missions/23">InSight Landing on Mars</HyperText.Link>
              </HyperText.LI>
              <HyperText.LI>
                January 2019<br />
                <HyperText.Link to="/missions/23">Expedition 57 Landing</HyperText.Link>
              </HyperText.LI>
              <HyperText.LI>
                March 2019<br />
                <HyperText.Link to="/missions/23">Northrop Grumman Resupply Mission to Space Station (CRS-10)</HyperText.Link>
              </HyperText.LI>
            </HyperText.UL>

            <HyperText.H2>
              <HyperText.A href="https://twitter.com/hashtag/Falcon9">#Falcon9</HyperText.A> on Twitter
            </HyperText.H2>
            <Tweet
              tweetId="1049619991195262982"
            />

            <HyperText.H2>Tickets 🎫</HyperText.H2>
            <Place />
            <Tickets tickets={tickets} />
          </HyperText>
        </Reducer>
      </React.Fragment>
    );
  }
}
