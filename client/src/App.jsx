import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Users from './pages/Users';

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/events" component={Events} />
                        <Route path="/users" component={Users} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;