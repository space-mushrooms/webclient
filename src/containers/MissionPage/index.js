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
    <div>1</div>
  ),
  '2': (
    <div>2</div>
  ),
  '3': (
    <div>3</div>
  )
};

const imageMap = {
  '1': '',
  '2': '',
  '3': '',
};

const titleMap = {
  '1': 'Ftitle',
  '2': '',
  '3': ''
};
