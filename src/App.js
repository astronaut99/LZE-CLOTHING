import React from "react";
//---------Router-------------
import { Switch, Route } from "react-router-dom";
//----------------------------

import "./App.css";
import HomePage from "./pages/homepage/homepage.com";
import ShopPage from "./pages/shop/shop.com";
import Header from "./components/header/header.com";
import SignInAndUp from "./pages/signin-signup/signin-signup.com";

//------------Auth--------------
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // using it unmount fetch once done
  unsubscribeFromAuth = null;

  // fetch one time using firebase auth library
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
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
