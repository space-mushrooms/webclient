import React from 'react';
import NickHague from '../components/NickHague';
import AlekseyOvchinin from '../components/AlekseyOvchinin';

export default [{
  id: '1',
  title: 'Nick Hague',
  text: 'American Flight Test Engineer and a NASA astronaut of the class of 2013',
  imgUrl: 'https://i.imgur.com/8mWZVA1.jpg',
}, {
  id: '2',
  title: 'Aleksey Ovchinin',
  text: 'Russian Air Force Major and cosmonaut',
  imgUrl: 'https://i.imgur.com/04v3Ci7.jpg',
}];

export const astronautsContent = [(
  <NickHague />
), (
  <AlekseyOvchinin />
)];