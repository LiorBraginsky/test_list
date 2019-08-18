import React from 'react';
import './App.css';
import List from './components/List';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/item-details/:post_id" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
