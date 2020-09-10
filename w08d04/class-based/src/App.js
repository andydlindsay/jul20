import React from 'react';
import './App.css';
import ClassBased from './components/ClassBased';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [greeting] = React.useState('Welcome to Our App!!');

  return (
    <div className="App">
      <h1>W8D4</h1>

      <Router>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route path="/about">
            <ClassBased greeting={greeting} somethingNew='hello' />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
