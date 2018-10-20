import React, {Component} from 'react';
import Reducer from '../Reducer';
import styles from './index.module.css';


export default class ListPage extends Component {
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
            const key = [item.title, item.text, item.imgUrl].join();
            return (
              <div className={styles.item} key={key}>
                <div className={styles.itemThumbnail} style={{backgroundImage: `url(${item.imgUrl})`}}></div>
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemText}>{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Reducer>
    );
  }
}
