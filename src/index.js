import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';
import Launch from './containers/Launch';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(browserHistory)),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="launches/:id" component={Launch} />
        <Route path="profile" component={Launch} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
