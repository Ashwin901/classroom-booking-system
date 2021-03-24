import React from "react";
import HomePage from "./HomePage";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Room/Dashboard";
import YourRooms from "./Room/YourRooms";
import UpdateRoom from "./Room/UpdateRoom";
import ProfilePage from "./Auth/ProfilePage";
import UpdatePassword from "./Auth/UpdatePassword";
import BookedRooms from "./Room/BookedRoom";
import AvailableRooms from "./Room/AvaliableRooms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookRoom from "./Room/BookRoom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/yourrooms">
          <YourRooms />
        </Route>
        <Route path="/updateRoom">
          <UpdateRoom />
        </Route>
        <Route path="/bookedRooms">
          <BookedRooms />
        </Route>
        <Route path="/bookRoom">
          <BookRoom />
        </Route>
        <Route path="/availableRooms">
          <AvailableRooms />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/changePassword">
          <UpdatePassword />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
