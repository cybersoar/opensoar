import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Settings from './settings/Settings'
function Index(props){
  return(
    <div>
       <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Dashboard} />
       <Route path="/dashboard" component={Dashboard} />
       <Route path="/settings" component={Settings} />
       </Switch>
       </BrowserRouter>
    </div>
  )
}

render (<Index />,document.getElementById('root'));
