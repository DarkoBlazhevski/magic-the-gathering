import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
    return <div className="container">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route
                path='/dashboard'
                render={(props) => (
                    <Dashboard {...props} isAuthed={true}
                        greeting='name'
                    />
                )}
            />
        </Switch>
    </div>
};

export default App;