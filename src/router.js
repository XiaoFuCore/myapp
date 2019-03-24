import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Admin from './admin'
import Login from '@/views/login'
import Home from '@/views/home'
import NoMatch from '@/views/nomatch'


export default class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/admin' render={() =>
                            <Admin>
                             <Route path='/admin/home' component={Home} />
                             <Route  component={NoMatch} />
                            </Admin>
                        } />
                    </Switch>
                </App>
            </Router>
        )
    }

}