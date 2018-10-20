import React from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import TitledSection from '../../components/TitledSection';

export default function MainPage() {
  return (
    <TitledSection title="Upcoming launch">
      <Swipe>
        <LaunchBanner />
        <LaunchBanner />
        <LaunchBanner />
      </Swipe>
    </TitledSection>
  );
}
