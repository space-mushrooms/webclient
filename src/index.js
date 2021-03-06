import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';
import LaunchPage from './containers/Launch';
import ContentPage from './containers/Content';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import identity from 'lodash/identity';
import AstronautPage from './containers/Astronaut';
import MissionPage from './containers/MissionPage';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(browserHistory)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : identity,
    )
);

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/main" />
        <Route path="/main" component={Main} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/main/vehicles" component={Vehicles} />
        <Route backToTitle="Main" backToUrl="/main" path="main/launches/:id" component={LaunchPage} />
        <Route backToTitle="Launch vehicles" backToUrl="/vehicles" path="launches/:id" component={LaunchPage} />
        <Route backToTitle="Launch vehicles" backToUrl="/vehicles" path="/vehicles/:id" component={ContentPage} />
        <Route backToTitle="Main" backToUrl="/" path="/astronauts/:id" component={AstronautPage} />
        <Route backToTitle="Main" backToUrl="/" path="/main/astronauts/:id" component={AstronautPage} />
        <Route backToTitle="Main" backToUrl="/" path="/mission/:id" component={MissionPage} />
        <Route backToTitle="Main" backToUrl="/" path="/main/mission/:id" component={MissionPage} />
        <Route path="profile" component={LaunchPage} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
