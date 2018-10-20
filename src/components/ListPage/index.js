import React, {Component} from 'react';
import Reducer from '../Reducer';
import PropTypes from 'prop-types';
import styles from './index.module.css';


export default class ListPage extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
    })),
    search: PropTypes.string,
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
    };
  }

  render() {
    const {search, title} = this.props;
    const data = this.props.data.filter(item => {
      const itemValue = item[search] ? item[search].toLowerCase() : '';
      return itemValue.includes(this.state.searchString.toLowerCase());
    });

    return (
      <Reducer marginTop>
        {title && <h1 className={styles.title}>{title}</h1>}
        {search && (<input className={styles.search} onInput={evt => {
          this.setState({
            searchString: evt.target.value,
          });
        }} />)}
        <div className={styles.list}>
          {data.map(item => {
            return (
              <div className={styles.item} key={item.id}>
                <div className={styles.itemThumbnail} style={{backgroundImage: `url(${item.imgUrl})`}}></div>
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  {item.text && <div className={styles.itemText}>{item.text}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </Reducer>
    );
  }
}
