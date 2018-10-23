import classnames from 'classnames/bind';
import Link from '../PageTransition/Link';
import React, {PureComponent} from 'react';
import styles from './index.module.css';
import TransitionType, {createTransition} from '../PageTransition/Type';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Card from '../Card';

const cn = classnames.bind(styles);

class FactCard extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  createTransition = () => createTransition(TransitionType.EXPAND, {
    rect: this.ref.current.getBoundingClientRect(),
    height: '225px',
  });

  getPathname() {
    return `/main${this.props.to}`;
  }

  render() {
    const { image, fact, description, height = '210px' } = this.props;
    return (
      <div ref={this.ref}>
        <Link transition={this.createTransition} className={cn('link')} to={this.getPathname()} onClick={this.handleClick}>
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
