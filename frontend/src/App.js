/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Protected from './components/protected';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signupterms';
import Forget from './components/forget/forget';
import EditProfile from './components/edit_Components/editprofile';
import EditId from './components/edit_Components/editid';
import EditPassword from './components/edit_Components/editpassword';
import DashboardPanel from './components/dashboard/dashboardPanel/dashboardpanel';
import Chat from "./components/chat/chat";
import IndividualPanel from './components/individual/individualPanel/individualComponents/individualpanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


if (typeof Node === "function" && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    // debugger;
    if (child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.apply(this, arguments);
  };
}


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
