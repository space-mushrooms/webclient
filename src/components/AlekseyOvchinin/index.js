import classnames from 'classnames/bind';
import HyperText from '../HyperText';
import React from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function AlekseyOvchinin() {
  return (
    <HyperText>
      <HyperText.H2>About</HyperText.H2>
      <HyperText.P>Aleksey Nikolayevich Ovchinin born 28 September 1971 in Rybinsk, Yaroslavl Oblast, Russian SFSR is a Russian Air Force Major and cosmonaut, who was selected in 2006.</HyperText.P>
      <HyperText.P>Ovchinin made his first spaceflight in 2016, and was assigned as Commander of Soyuz MS-10 in 2018.</HyperText.P>
      <HyperText.H2>Cosmonaut career</HyperText.H2>
      <HyperText.UL>
        <HyperText.LI>
          Expedition 57/58 <br />
        </HyperText.LI>
        <HyperText.LI>
          Expedition 57 (aborted)<br />
        </HyperText.LI>
      </HyperText.UL>
      <HyperText.P>
        Ovchinin launched to space on his first flight as the commander of Soyuz TMA-20M which launched on March 18, 2016 21:26 UTC, to join the International Space Station as part of Expedition 47/48. He returned to Earth with his crew mates on September 7, 2016 after 172 days on orbit.
      </HyperText.P>
      <HyperText.P>
        On October 11, 2018, Ovchinin and Nick Hague boarded Soyuz MS-10 on the way to the International Space Station to join Expedition 57, but the launch was aborted mid-flight due to a booster failure; the crew landed safely after a ballistic descent, minutes from launch
      </HyperText.P>
    </HyperText>
  )
}