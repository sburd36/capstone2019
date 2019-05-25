import React, { Component } from 'react';
import './style/index.css';
import Nav from './Main/Nav'
import SignUp from './Signup'
import Stay from './Stay'
import Landing from './Main/landing'
import Footer from './Main/Footer'
import AboutUs from './Main/AboutUs'
import OurTool from './Main/OurTool'
import CurrentBookings from './Advocate/CurrentBookings'
import SignIn from './Main/SignIn'
import Calendar from './Advocate/AdvoCalendar'
import Situation from './Situation'
import { withAuthentication } from './Sessions';
import SearchBooking from './Advocate/SearchBooking';
import PasswordForgetPage from './PassForget';
import Admin from './Admin';
import SignUpHost from './SignUpHost';
import HostDash from './Host/HostDash';
import CreateProfile from './Host/CreateProfile'
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        uid: "",
        firstName: "",
        lastName: "",
        email: "",
        profile: {
          gender: "",
          story: "",
          listings: [],
          religion: "",
          languag: [],
          ethnicity: [],
          phone:""
        },
      },

      listings: [{
        id: "",
        address: "",
        amenities: [],
        description: "",
        instructions: "",
        guestCount: "",
        hostID: "",
        houseRules: [],
        location:"",
        state: "",
        houseType: "",
        zip: "",
        availability: [],
        currentBookings: [],
        pastBookings: []
      }]
    }
  }

  clickSituation = () => {
    this.setState({})
  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
              <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/stay" component={Stay} />
                  <Route path="/aboutus" component={AboutUs} />
                  <Route path="/ourtool" component={OurTool} />
                  <Route path="/Admin" component={Admin} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/situation" component={Situation} />
                  <Route path="/PassForget" component={PasswordForgetPage} />
                  <Route path="/calendar" component={Calendar} />

                  {/* Advocate */}
                  <Route path="/advocate/currentbookings" component={CurrentBookings} />
                  <Route path="/advocate/searchbookings" component={SearchBooking} />

                  {/* Host */}
                  <Route path="/host/profile" component={CreateProfile} />
                  <Route path="/host/currentbookings" component={HostDash} />
              </Switch>
          </div>    
        </Router>
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(App);
// <img src={logo} className="App-logo" alt="logo" />

// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>