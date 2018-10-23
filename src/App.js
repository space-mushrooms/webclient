import PageTransition from 'react-router-page-transition';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getPageTransition} from './reducers/pageTransition';
import Expand from './components/PageTransition/Expand';
import Navbar from './components/Navbar';
import Slide from './components/PageTransition/Slide';
import Type from './components/PageTransition/Type';

class App extends PureComponent {
  renderTransition() {
    const {children, transition} = this.props;
    const type = (transition && transition.type) || null;

    switch (type) {
      case Type.EXPAND:
        return <Expand options={transition.payload}>{children}</Expand>;
      case Type.SLIDE:
        return <Slide options={transition.payload}>{children}</Slide>;
      default:
        return <div className="transition-item">{children}</div>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <main role="main" key="main">
          <PageTransition timeout={500}>
            {this.renderTransition()}
          </PageTransition>
        </main>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default connect(state => ({transition: getPageTransition(state)}))(App);
