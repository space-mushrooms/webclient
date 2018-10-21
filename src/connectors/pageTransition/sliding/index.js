import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function sliding({leave, appear}) {
  return InnerComponent => {
    return class Sliding extends PureComponent {
      onTransitionDidEnd() {
        document.documentElement.scrollTop = 0;
      }

      render() {
        return (
          <div className={`${cn('page', {leave, appear})} transition-item`}>
            <InnerComponent {...this.props} />
          </div>
        );
      }
    }
  };
}
