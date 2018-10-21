import React, { PureComponent } from 'react';
import LaunchCard from '../../components/LaunchCard';
import { byId } from '../../mock/launch';
import slidingTransition from '../../connectors/pageTransition/sliding';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';

class LaunchPage extends PureComponent {
  render() {
    return (
      <LaunchCard
        launch={byId[this.props.params.id]}
        backToTitle={this.props.route.backToTitle}
        backToUrl={this.props.route.backToUrl}
      />
    );
  }
}

export default slidingTransition()(LaunchPage);
export const LaunchExpanding = launchExpandTransition()(LaunchPage);
