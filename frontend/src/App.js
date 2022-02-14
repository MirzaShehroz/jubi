/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import SignIn from './components/signin/signin';
import Protected from './components/protected';
import SignUp from './components/signup/signupterms';
import Forget from './components/forget/forget';
import EditProfile from './components/edit_components/editprofile';
import EditId from './components/edit_components/editid';
import EditPassword from './components/edit_components/editpassword';
import DashboardPanel from './components/dashboard_components/dashboard_panel/dashboardpanel';
import Chat from "./components/chat/chat";
import IndividualPanel from './components/individual/individual_panel/individual_components/individual_panel1/individualpanel1';

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
