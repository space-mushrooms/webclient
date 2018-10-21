import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function sliding() {
  return InnerComponent => {
    return class launchExpand extends PureComponent {
      onTransitionWillStart(data) {
        const state = this.props.location.state;
        if (!state.clickType) {
          // Default animate position if user goto this page directly

          this.setState({
            doTransform: true,
            position: { top: 0, left: 0, height: 10, width: 10 },
            color: 'gray',
            borderRadius: 200,
          });
          return;
        }
        this.setState({
          doTransform: true,
          position: {
            top: state.clickPayload.rect.top,
            height: state.clickPayload.rect.height,
            left: state.clickPayload.rect.left,
            width: state.clickPayload.rect.width,
          },
          currenctTime: state.clickPayload.currenctTime,
        });
      }

      onTransitionDidEnd() {
        // Do your stuff here
      }

      transitionManuallyStart() {
        this.setState({
          position: {
            top: 0,
            height: '100%',
            left: 0,
            width: '100%',
          },
          borderRadius: 0,
          doTransform: true,
        });
      }

      transitionManuallyStop() {
        this.setState({
          doTransform: false,
        });
      }

      render() {
        return (
          <div className={`${cn('page')} transition-item`}>
            <InnerComponent {...this.props} />
          </div>
        );
      }
    }
  };
}
