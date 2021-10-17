import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import AddContent from "./pages/AddContent";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
  path: string;
};

function PrivateRoute({ children, ...rest }: Props) {
  let auth: boolean = localStorage.getItem("jwt-token") !== null;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/add">
              <AddContent />
            </PrivateRoute>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
