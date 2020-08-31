import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import './App.css';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div className="App">
      <div className={'ui container'}>
        <Router history={ history }>
          <div>
            <Header />
            <Switch>
              <Route path={'/'} exact component={StreamList} />
              <Route path={'/streams/new'} exact component={StreamCreate} />
              <Route path={'/streams/edit/:id'} exact component={StreamEdit} />
              <Route path={'/streams/delete/:id'} exact component={StreamDelete} />
              <Route path={'/streams/show/:id'} exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
