import React, { PureComponent } from 'react';
import ContentCard from '../../components/ContentCard';
import astronauts, {astronautsContent} from '../../mock/astronauts';
import Reducer from '../../components/Reducer';

export default class AstronautPage extends PureComponent {
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
