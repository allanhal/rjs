import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main'
import SignInSide from './components/SignInSide';
import Content from './components/Content';
import MadeWithLove from './components/MadeWithLove';
import { AppBar } from '@material-ui/core';


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
      <Route path="/content" component={Content} />
      <Route path="/signInSide" component={SignInSide} />
      <Route path="/madeWithLove" component={MadeWithLove} />
      <Route path="/appBar" component={AppBar} />
    </BrowserRouter>
  );
}

export default App;
