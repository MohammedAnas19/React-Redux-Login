import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Signin from './screens/Signin';


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/signin" component={Signin} />         
         </Switch>    
    </div>
  );
}

export default App;
