import React, {PureComponent} from 'react';
import ListPage from '../../components/ListPage';
import slidingTransition from '../../connectors/pageTransition/sliding';
import Api from '../../Api';


class Vehicles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    Api.getInstance().loadVehicles().then(vehicles => {
      this.setState({data: vehicles});
    })
  }

  render() {
    return (
      <ListPage
        title="Launch vehicles"
        search="title"
        data={this.state.data}
      />
    );
  }
}

export default slidingTransition()(Vehicles);
