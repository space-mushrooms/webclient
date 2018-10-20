import React, {PureComponent} from 'react';
import Sliding from '../../components/PageTransition/Sliding';
import TitledSection from '../../components/TitledSection';

export default class LaunchPage extends PureComponent {
  render() {
    return (
      <Sliding>
        <TitledSection title="Launch Page">
          Launch Page
        </TitledSection>
      </Sliding>
    );
  }
}
