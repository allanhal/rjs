import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import Login from './SignInSide'

declare module 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
    </Button>
        <li>
          <Link to="/login">Users</Link>
        </li>

        <Route path="/login" component={Login} />
        {/* <Login></Login> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
