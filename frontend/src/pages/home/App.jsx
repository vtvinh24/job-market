import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Jobs from './Jobs';
import Users from './Users';
import Setting from './Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Setting} />
        <Route path="/" exact component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;