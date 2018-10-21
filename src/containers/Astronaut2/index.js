import React, { PureComponent } from 'react';
import ContentCard from '../../components/ContentCard';
import slidingTransition from '../../connectors/pageTransition/sliding';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';
import astronaut from '../../mock/astronauts';

const data = astronaut[0];

class Astronaut1Page extends PureComponent {
  render() {
    return (
      <ContentCard
        title={data.title}
        image={data.imgUrl}
        backToTitle={this.props.route.backToTitle}
        backToUrl={this.props.route.backToUrl}
      />
    );
  }
}

export default slidingTransition()(Astronaut1Page);
export const ContentExpanding = launchExpandTransition()(Astronaut1Page);
