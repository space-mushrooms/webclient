import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function launchExpand(options) {
  return InnerComponent => {
    return class launchExpand extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {};
      }

      onTransitionWillStart() {
        const state = this.props.location.state;
        if (!state || !state.clickType) {
          // Default animate position if user goto this page directly
          this.setState({
            doTransform: false,
          });
          return;
        }

        this.setState({
          doTransform: true,
          style: {
            borderRadius: '10px',
            top: state.clickPayload.rect.top,
            height: state.clickPayload.rect.height,
            left: state.clickPayload.rect.left,
            width: state.clickPayload.rect.width,
          },
          wrapperStyle: {
            opacity: 1,
          },
        });
      }

      onTransitionDidEnd() {}

      transitionManuallyStart() {
        document.documentElement.scrollTop = 0;
        this.setState({
          style: options || null,
          wrapperStyle: null,
        });
      }

      transitionManuallyStop() {
        document.documentElement.scrollTop = 0;
        this.setState({
          doTransform: false,
        });
      }

      render() {
        const {doTransform, style, wrapperStyle} = this.state;
        return (
          <React.Fragment>
            {doTransform ? (
              <div className={cn('wrapper')} style={wrapperStyle}>
                <div className={cn('overlay')} />
                <div className={cn('block')} style={style} />
              </div>
            ) : null}
            <div className={`${cn('page')} transition-item`}>
              <InnerComponent {...this.props} />
            </div>
          </React.Fragment>
        );
      }
    }
  };
}
