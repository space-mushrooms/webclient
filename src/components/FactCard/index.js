import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import Card from '../Card';

const cn = classnames.bind(styles);

class FactCard extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = evt => {
    evt.preventDefault();
    this.props.push({
      pathname: this.getPathname(),
      state: {
        clickType: 'mission',
        clickPayload: {
          rect: this.ref.current.getBoundingClientRect(),
        },
      },
    });
  }

  getPathname() {
    return `/main${this.props.to}`;
  }

  render() {
    const { image, fact, description, height = '210px' } = this.props;
    return (
      <div ref={this.ref}>
        <Link className={cn('link')} to={this.getPathname()} onClick={this.handleClick}>
          <Card borderRadius gradient backgroundImage={image} height={height}>
            <div className={cn('cardFact')}>
              {fact}
            </div>
            {description && <div className={cn('cardDescription')}>{description}</div>}
          </Card>
        </Link>
      </div>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ push }, dispatch))(FactCard);
