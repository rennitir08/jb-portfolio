// Load React
import React from 'react'
// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your components here...
import App from 'App';
import Projects from 'Projects';

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
            </Router>
        </Provider>
    }
}

export default Routes
