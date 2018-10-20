import React from 'react';
import Swipe from '../../components/Swipe';
import LaunchBanner from '../../components/LaunchBanner';
import TitledSection from '../../components/TitledSection';

export default function MainPage() {
  return (
    <TitledSection title="Upcoming launch" path="/" linkText="See all">
      <Swipe>
        <LaunchBanner
          backgroundImage="https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg"
          mission="Commercial Crew SpaceX"
          rocket="SpaceX Falcon Heavy"
        />
        <LaunchBanner />
        <LaunchBanner />
      </Swipe>
    </TitledSection>
  );
}
