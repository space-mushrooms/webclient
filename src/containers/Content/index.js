import React, { PureComponent } from 'react';
import ContentCard from '../../components/ContentCard';
import slidingTransition from '../../connectors/pageTransition/sliding';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';

class ContentPage extends PureComponent {
  render() {
    return (
      <ContentCard
        title="SpaceX Falcon Heavy"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/UC-12B_-_BuNo_161512_%283326008246%29.jpg/500px-UC-12B_-_BuNo_161512_%283326008246%29.jpg"
        backToTitle={this.props.route.backToTitle}
        backToUrl={this.props.route.backToUrl}
      />
    );
  }
}

export default slidingTransition()(ContentPage);
export const ContentExpanding = launchExpandTransition()(ContentPage);
