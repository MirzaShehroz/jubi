/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/signin';
import SignUp from './components/signupterms';
import Forget from './components/forget';
import EditProfile from './components/editprofile';
import IdPassword from './components/idpassword';
import DashboardPanel from './components/dashboardpanel';

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path='/'><DashboardPanel /></Route>
        <Route path='/sign-in' render={props => (<SignIn {...props} />)} />
        <Route path='/sign-up'><SignUp /></Route>
        <Route path='/forget'><Forget /></Route>
        <Route path='/edit-profile'><EditProfile /></Route>
        <Route path='/edit-id-password'><IdPassword /></Route>
      </Router>
    </div>
  );
}

export default App;
