import React from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';

export default function MainPage() {
  return (
      <Swipe>
        <LaunchBanner />
        <LaunchBanner />
        <LaunchBanner />
      </Swipe>
  );
}
