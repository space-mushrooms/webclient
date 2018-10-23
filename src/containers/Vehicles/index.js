import React, {PureComponent} from 'react';
import ListPage from '../../components/ListPage';
import Api from '../../Api';

export default class VehiclesPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const vehicles = Api.getInstance().loadVehicles();

    this.setState({data: vehicles});
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
