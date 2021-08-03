import React ,{useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginForm from './components/Login';
import HomePage from './components/Home';
import Header from './components/Header'
import Register from './components/Register';
import AddVehicles from './components/AddVehicles';
import ViewVehicles from './components/ViewVehicles';
import UpdateVehicle from './components/UpdateVehicle';
import DeleteVehicle from './components/DeleteVehicle';
function App() {

  return (
    <Router>
    <div className="App" style={{backgroundImage:`url("http://www.maves.com/wp-content/uploads/2018/03/maves-home-Transportation-Management-System-.jpg")`,width:"100%", height:"666px"}}>
      <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm />
            </Route>
            <Route path="/Login" component={LoginForm} />
            <Route path="/HomePage" component={HomePage} />   
            <Route path="/Register" component={Register} />
            <Route path="/AddVehicles" component={AddVehicles} />
            <Route path="/ViewVehicles" component={ViewVehicles} />
            <Route path="/UpdateVehicles" component={UpdateVehicle} />
            <Route path="/DeleteVehicle" component={DeleteVehicle}/>
          </Switch>
       </div>
   </div>
  </Router>
  );
}

export default App;
