import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TeamsPage from '../pages/TeamsPage';
import TeamPage from '../components/TeamPage';
import StandingsPage from '../pages/StandingsPage';
import '../styles/Main.css';

const Main = () => {
    return ( 
    <div className="main">
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/teams" component={TeamsPage} />
            <Route path="/teams/:id" component={TeamPage} />
            <Route path="/standings" component={StandingsPage} />
        </Switch>
    </div> 
    );
}
 
export default Main;