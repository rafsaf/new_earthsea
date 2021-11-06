import React, { useContext } from "react";
import "./App.css";
import Index from "./pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/login";
import AddContent from "./pages/AddContent";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./pages/Article";
import SettingsContext from "./components/utils/settingsContext";
import useLocalStorage from "./components/utils/useLocalStorage";

type Props = {
  children?: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, ...rest }: Props) => {
  const { isLoggedIn } = useContext(SettingsContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  const [jwtToken, setJwtToken] = useLocalStorage("jwt-token");

  const isLoggedIn = () => {
    if (jwtToken) {
      return true;
    }
    return false;
  };

  return (
    <SettingsContext.Provider value={{ jwtToken, setJwtToken, isLoggedIn }}>
      <Router>
        <Header />
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/-/:title">
              <Article />
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
    </SettingsContext.Provider>
  );
};

export default App;
