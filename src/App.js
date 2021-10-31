import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import About from './About/About';
import Admin from './Admin/Admin';
import './App.css';
import Booking from './Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import PlaceOrders from './PlaceOrders/PlaceOrders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Services from './Services/Services';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/placeorders/:id">
            <PlaceOrders></PlaceOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
