import React from "react";

import SideBar from "./components/sidebar/sidebar.component";
import Body from "./components/body/body.component";
import SignIn from "./components/sign-in/sign-in.component";
import Dashboard from "./components/dashboard/dashboard.component";
import { Switch, Route } from "react-router-dom";
import {
  firestore,
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      data: [],
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        // console.log(userRef)
        firestore
          .collection(`users/${userRef.id}/employees`)
          .onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            this.setState({ data });
          });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="hris">
        <SideBar currentUser={this.state.currentUser} />
        <Switch>
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard
                currentUser={this.state.currentUser}
                {...props}
                employees={this.state.data}
              />
            )}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route
            path="/employees"
            render={(props) => (
              <Body currentUser={this.state.data} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
