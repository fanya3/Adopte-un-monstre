import React from 'react';
import CinemaDate from './components/CinemaDate'
import './App.css';
import DatingFeature from "./components/DatingFeature"
import ifNoScreen from "./components/ifNoScreen";
import Elevator from './components/Elevator';
import {Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store/store';


function App() {
  return (
    <div >
      <Provider store={store}>
        <Switch>
          <Route exact path = '/' component={DatingFeature}/>
          <Route path = '/ifNoScreen' component={ifNoScreen} />
          <Route path = '/elevator' component={Elevator} />
          <Route path = '/cinemaDate' component={CinemaDate}/>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
