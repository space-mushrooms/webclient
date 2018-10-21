import classnames from 'classnames/bind';
import React, {PureComponent} from 'react';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function sliding() {
  return InnerComponent => {
    return class launchExpand extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {};
      }

      onTransitionWillStart(data) {
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
          launch: state.clickPayload.launch,
          currenctTime: state.clickPayload.currenctTime || 0,
        });
      }

      onTransitionDidEnd() {
        // Do your stuff here
      }

      transitionManuallyStart() {
        this.setState({
          style: null,
          doTransform: true,
        });
      }

      transitionManuallyStop() {
        document.documentElement.scrollTop = 0;
        this.setState({
          doTransform: false,
        });
      }

      render() {
        const {doTransform, style, launch, currenctTime} = this.state;
        console.log(style);
        return (
          <React.Fragment>
            <div className={`${cn('page')} transition-item`}>
              <InnerComponent {...this.props} />
            </div>
            {doTransform ? (
              <React.Fragment>
                <div className={cn('overlay')} />
                <div className={cn('block')} style={style}>
                  {(launch && launch.video) ? (
                    <video className={cn('video')} src={`${launch.video}#t=${currenctTime}`} />
                  ) : null}
                </div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        );
      }
    }
  };
}
