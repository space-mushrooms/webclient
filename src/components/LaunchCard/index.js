import classnames from 'classnames/bind';
import React, {Component} from 'react';
import styles from './index.module.css';
import {Tweet} from 'react-twitter-widgets'
import HyperText from '../HyperText';
import Reducer from '../Reducer';
import Tickets from '../Tickets';
import LaunchShape from '../../shapes/Launch';
import tickets from '../../mock/tickets';
const cn = classnames.bind(styles);

export default class LaunchCard extends Component {
  static propTypes = {
    launch: LaunchShape.isRequired,
  };

  render() {
    const {launch} = this.props;
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
            <Tickets tickets={tickets} />
          </HyperText>
        </Reducer>
      </div>
    );
  }
}
