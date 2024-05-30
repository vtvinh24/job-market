import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminJobManagement from './Jobs';
import AdminUsers from './Users';
import AdminSettings from './Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/jobs" component={AdminJobManagement} />
        <Route path="/users" component={AdminUsers} />
        <Route path="/settings" component={AdminSettings} />
        <Route path="/" exact component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;