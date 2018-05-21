import React from 'react';
import {
    HashRouter,
    Route,
    Switch
  } from 'react-router-dom';
import {Navigation} from "./navigation.jsx";
import {Home} from "./_home.jsx";
import {Random} from "./_random.jsx";
import {ToWatch} from "./_toWatch.jsx";
import {Watched} from "./_watched.jsx";
import {Community} from "./_community.jsx";
import {NotFound} from "./_notFound.jsx";


class Routing extends React.Component{

    render() {
        return <HashRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/random' component={Random}/>
                    <Route path='/towatch' component={ToWatch}/>
                    <Route path='/watched' component={Watched}/>
                    <Route path='/community' component={Community}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export {Routing}
