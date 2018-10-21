import React, {PureComponent} from 'react';
import ContentCard from '../../components/ContentCard';
import Reducer from '../../components/Reducer';

export default class MissionPage extends PureComponent {

  render() {
    return (
      <>
        <ContentCard
          title={titleMap[this.props.params.id]}
          image={imageMap[this.props.params.id]}
          backToTitle={this.props.route.backToTitle}
          backToUrl={this.props.route.backToUrl}
        />
        <Reducer marginTop>
          {contentMap[this.props.params.id]}
        </Reducer>
      </>
    );
  }
}

const contentMap = {
  '1': (
    <div>
      <h1>Curiosity Overview</h1>
      <p>With its rover named Curiosity, Mars Science Laboratory mission is part of NASA's Mars Exploration Program, a long-term effort of robotic exploration of the red planet. Curiosity was designed to assess whether Mars ever had an environment able to support small life forms called microbes. In other words, its mission is to determine the planet's "habitability."﻿</p>
      <p>To find out, the rover carries the biggest, most advanced suite of instruments for scientific studies ever sent to the martian surface. The rover will analyze samples scooped from the soil and drilled from rocks. The record of the planet's climate and geology is essentially "written in the rocks and soil" -- in their formation, structure, and chemical composition. The rover's onboard laboratory will study rocks, soils, and the local geologic setting in order to detect chemical building blocks of life (e.g., forms of carbon) on Mars and will assess what the martian environment was like in the past.</p>
      <p>Mars Science Laboratory relies on innovative technologies</p>
      <p>Mars Science Laboratory will rely on new technological innovations, especially for landing. The spacecraft descended on a parachute and then, during the final seconds prior to landing, lowered the upright rover on a tether to the surface, much like a sky crane. Now on the surface, the rover will be able to roll over obstacles up to 75 centimeters (29 inches) high and travel up to 90 meters (295 feet) per hour. On average, the rover is expected to travel about 30 meters (98 feet) per hour, based on power levels, slippage, steepness of the terrain, visibility, and other variables.</p>
      <p>The rover carries a radioisotope power system that generates electricity from the heat of plutonium's radioactive decay. This power source gives the mission an operating lifespan on Mars' surface of a full martian year (687 Earth days) or more, while also providing significantly greater mobility and operational flexibility, enhanced science payload capability, and exploration of a much larger range of latitudes and altitudes than was possible on previous missions to Mars.</p>
      <p>Arriving at Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012), Mars Science Laboratory will serve as an entrée to the next decade of Mars exploration. It represents a huge step in Mars surface science and exploration capability because it will:</p>
      <ul>
        <li>demonstrate the ability to land a very large, heavy rover to the surface of Mars (which could be used for a future Mars Sample Return mission that would collect rocks and soils and send them back to Earth for laboratory analysis)</li>
        <li>demonstrate the ability to land more precisely in a 20-kilometer (12.4-mile) landing circle</li>
        <li>demonstrate long-range mobility on the surface of the red planet (5-20 kilometers or about 3 to 12 miles) for the collection of more diverse samples and studies.</li>
      </ul>
    </div>
  ),
  '2': (
    <div>3</div>
  ),
  '3': (
    <div>
      <h1>Hubble Space Telescope</h1>
      <p>NASA continues to work toward resuming science operations of the Hubble Space Telescope after the spacecraft entered safe mode due to a failed gyroscope (gyro) on Friday, Oct. 5.</p>
      <p>Following the gyro failure, the Hubble operations team turned on a backup gyro on the spacecraft. However, that gyro did not perform as expected, reporting rotation rates that are orders of magnitude higher than they actually are. This past week, tests were conducted to assess the condition of that backup gyro. The tests showed that the gyro is properly tracking Hubble’s movement, but the rates reported are consistently higher than the true rates. This is similar to a speedometer on your car continuously showing that your speed is 100 miles per hour faster than it actually is; it properly shows when your car speeds up or slows down, and by how much, but the actual speed is inaccurate.</p>
      <p>When the spacecraft turns across the sky from one target to the next, the gyro is put into a coarser (high) mode. In this high mode it may be possible to subtract out a consistent large offset to get an accurate reading. However, after the large turns are over, the spacecraft attempts to lock onto a target and stay very still. For this activity, the gyro goes into a precision (low) mode to measure very small movements. The extremely high rates currently being reported exceed the upper limit of the gyro in this low mode, preventing the gyro from reporting the spacecraft’s small movements.</p>
      <p>An anomaly review board that consists of professionals experienced in the manufacturing of such gyros, Hubble operations personnel, flight software engineers and other experts was formed earlier this week to identify the cause of this behavior and determine what solutions can be implemented from the ground to correct or compensate for it.</p>
      <p>If the team is successful in solving the problem, Hubble will return to normal, three-gyro operations. If it is not, the spacecraft will be configured for one-gyro operations, which will still provide excellent science well into the 2020s, enabling it to work alongside the James Webb Space Telescope and continue groundbreaking science.</p>
      <p>Safe mode places the telescope into a stable configuration that suspends science observations and orients the spacecraft’s solar panels toward the Sun to ensure Hubble’s power requirements are met. The spacecraft remains in this configuration until ground control can correct or compensate for the issue. The rest of the spacecraft and its instruments are still fully functional and are expected to produce excellent science for years to come.</p>
      <h2>Hubble in Safe Mode as Gyro Issues are Diagnosed</h2>
      <p>A gyro is a device that measures the speed at which the spacecraft is turning, and is needed to help Hubble turn and lock on to new targets. To meet the stringent pointing requirements necessary to study far-off astronomical objects and obtain groundbreaking science data, Hubble’s gyros are extremely accurate. Hubble preferably uses three gyros at any given time to make the observatory as efficient as possible, and would work at slightly lower efficiency on only one gyro.</p>
      <p>During Servicing Mission 4 in 2009, astronauts installed six new gyros on Hubble. Three gyros have since failed after achieving or exceeding the average runtime for a Hubble gyro. When fewer than three operational gyros remain, Hubble will continue to make scientific observations in a previously developed and tested mode that uses just one gyro in order to maximize the observatory’s lifetime.</p>
      <p>Originally required to last 15 years, Hubble has now been operating for more than 28. The final servicing mission in 2009, expected to extend Hubble’s lifetime an additional 5 years, has now produced more than 9 years of science observations.</p>
      <p>Hubble is managed and operated at NASA’s Goddard Space Flight Center in Greenbelt, Maryland.</p>
        <p>For more information about Hubble, visit: <a href="http://www.nasa.gov/hubble">www.nasa.gov/hubble</a></p>
    </div>
  ),
  '4': (
    <div>3</div>
  )
};

const imageMap = {
  '1': 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22207-16.jpg',
  '2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Orb_CRS-1_unberthing_-_crop.jpg/1920px-Orb_CRS-1_unberthing_-_crop.jpg',
  '3': 'https://www.nasa.gov/sites/default/files/thumbnails/image/s125e012033_1.jpg',
  '4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Island_of_Hawai%27i_-_Landsat_mosaic.jpg/1920px-Island_of_Hawai%27i_-_Landsat_mosaic.jpg',
};

const titleMap = {
  '1': 'Curiosity Rover',
  '2': 'Northrop Grumman Commercial Resupply',
  '3': 'Hubble Space Telescope',
  '4': 'Landsat program',
};
