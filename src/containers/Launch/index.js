import React, {PureComponent} from 'react';
import TitledSection from '../../components/TitledSection';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';

class LaunchPage extends PureComponent {
  render() {
    return (
      <TitledSection title="Launch Page">
        Launch Page
      </TitledSection>
    );
  }
}

export default launchExpandTransition()(LaunchPage);
