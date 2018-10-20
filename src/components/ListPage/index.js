import React, {Component} from 'react';
import Reducer from '../Reducer';
import styles from './index.modules.css';


export default class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
    };
  }

  render() {
    const {search, title} = this.props;
    const data = this.props.data.filter(item => item[search].includes(this.state.searchString));

    return (
      <Reducer marginTop>
        {title && <h1 className={styles.title}>{title}</h1>}
        {search && (<input onInput={evt => {
          this.setState({
            searchString: evt.target.value,
          });
        }} />)}
        <div className={styles.list}>
          {data.map(item => {
            const key = [item.title, item.text, item.imgUrl].join();
            return (
              <div className={styles.item} key={key}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </Reducer>
    );
  }
}
