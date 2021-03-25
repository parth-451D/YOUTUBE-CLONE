import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/homeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./Screens/watchScreen/WatchScreen";
import SearchScreen from "./Screens/SearchScreen";
import SubscriptionsScreen from "./Screens/Subscription/SubscriptionsScreen";
import ChannelScreen from "./Screens/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const history = useHistory();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth">
        <LoginScreen />
      </Route>

      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route path="/feed/subscriptions">
        <Layout>
          <SubscriptionsScreen />
        </Layout>
      </Route>

      <Route path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
