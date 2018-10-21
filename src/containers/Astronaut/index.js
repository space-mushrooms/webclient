import React, { PureComponent } from 'react';
import ContentCard from '../../components/ContentCard';
import slidingTransition from '../../connectors/pageTransition/sliding';
import launchExpandTransition from '../../connectors/pageTransition/launchExpand';
import astronauts, {astronautsContent} from '../../mock/astronauts';
import Reducer from '../../components/Reducer';

class AstronautPage extends PureComponent {
  render() {
    const id = this.props.params.id - 1;
    const astronaut = astronauts[id];
    const content = astronautsContent[id];

    return (
      <>
        <ContentCard
          title={astronaut.title}
          image={astronaut.imgUrl}
          backToTitle={this.props.route.backToTitle}
          backToUrl={this.props.route.backToUrl}
        />
        <Reducer marginTop>
          {content}
        </Reducer>
      </>
    );
  }
}

export default slidingTransition()(AstronautPage);
export const ContentExpanding = launchExpandTransition()(AstronautPage);
