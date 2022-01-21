/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Protected from './components/protected';
import SignIn from './components/signin';
import SignUp from './components/signupterms';
import Forget from './components/forget';
import EditProfile from './components/editprofile';
import EditId from './components/editid';
import EditPassword from './components/editpassword';
import DashboardPanel from './components/dashboardpanel';
import Chat from "./components/chat";
import IndividualPanel from './components/individualpanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Protected exact path='/' component={DashboardPanel} />
        <Route path='/sign-in' render={props => (<SignIn {...props} />)} />
        <Route path='/sign-up'><SignUp /></Route>
        <Route path='/forget'><Forget /></Route>
        <Protected path='/edit-password' component={EditPassword} />
        <Protected path='/edit-id' component={EditId} />
        <Protected path='/chat' component={Chat} />
        <Protected path='/edit-profile' component={EditProfile} />
        <Protected exact path='/individual' component={IndividualPanel} />
        <Protected path='/allergies-condition' component={IndividualPanel} />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"colored"}
      />

    </div>
  );
}

export default App;
