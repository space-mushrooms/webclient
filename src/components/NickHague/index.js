import classnames from 'classnames/bind';
import HyperText from '../HyperText';
import React from 'react';
import styles from './index.module.css';
import { Timeline } from 'react-twitter-widgets'

const cn = classnames.bind(styles);

export default function NickHague() {
  return (
    <HyperText>
      <HyperText.H2>About</HyperText.H2>
      <HyperText.P>Tyler Nicklaus Hague (born on September 24, 1975) is an American Flight Test Engineer and a NASA astronaut of the class of 2013.</HyperText.P>
      <HyperText.P>Hague joined the U.S. Air Force and was commissioned as Second Lieutenant in May 1998. He was assigned to the Kirtland Air Force Base, Albuquerque, New Mexico in August 2000, working on advanced spacecraft technologies.</HyperText.P>
      <HyperText.H2>Cosmonaut career</HyperText.H2>
      <HyperText.UL>
        <HyperText.LI>
          Expedition 47/48 (aborted)<br />
        </HyperText.LI>
      </HyperText.UL>
      <HyperText.P>
        On October 11, 2018, Hague and Aleksey Ovchinin boarded Soyuz MS-10 on the way to the International Space Station, but the launch was aborted mid-flight due to a booster failure; the crew landed safely after a ballistic descent, minutes from launch.[6][4] During his MS-10 flight, the Soyuz spacecraft aborted at an altitude of around 50 kilometers (31 miles) and reached an apogee of 93 km (58 mi), on a suborbital trajectory, before landing 19 minutes and 41 seconds after launch according to a preliminary official report
      </HyperText.P>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'astrohague'
        }}
        options={{
          height: '400'
        }}
      />
    </HyperText>
  )
}