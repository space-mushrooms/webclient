import React, { PureComponent } from 'react';
import LaunchCard from '../../components/LaunchCard';
import { byId } from '../../mock/launch';

export default class LaunchPage extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <LaunchCard
        launch={byId[this.props.params.id]}
        backToTitle={this.props.route.backToTitle}
        backToUrl={this.props.route.backToUrl}
      />
    );
  }
}
