import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Route,
  Link,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import { Container, Navbar, Nav,Button } from "react-bootstrap";
import AddApartment from '../components/apartments/AddApartment';
import SignInPage from "./authentication/SignInPage";
import LoginPage from '../components/authentication/LoginPage';
import Apartments from '../components/apartments/Apartments';
import EditApartment from '../components/apartments/EditApartment';
import AddReservationPage from './reservations/AddReservationPage';
import Apartment from '../components/apartments/Apartment';
import Reservations from '../components/reservations/Reservations';
import { logout } from "../services/auth";
class App extends React.Component {
  render() {
    let token = window.localStorage.getItem("token");

    if (token) {
      return (
        <div>
          <Router>
            <Navbar bg="dark" variant="dark" expand>
              <Navbar.Brand as={Link} to="/">
                JWD
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/apartments">
                  Apartments
                </Nav.Link>
              </Nav>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/reservations">
                Reservations
              </Nav.Link>
            </Nav>
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/praznici">
              Praznici
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/signin">
          Sign in
        </Nav.Link>
        <Button onClick={()=>{logout()}}>Logout</Button>
        </Nav>
            </Navbar>

            <Container style={{marginTop:25}}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login">
                <Redirect to="/"></Redirect>
                </Route>
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/apartment/:id" component={Apartment} />
                <Route exact path="/apartments" component={Apartments} />
                <Route exact path="/apartments/add" component={AddApartment} />
                <Route exact path="/apartments/edit/:id" component={EditApartment} />
                <Route exact path="/reservations" component={Reservations} />
                <Route exact path="/reservation/:id" component={AddReservationPage} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Router>
        </div>
      );
    } else {
      return (
        <Router>
          <Container>
            <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/">
            <Redirect to="/login"></Redirect>
            </Route>
            </Switch>
          </Container>
        </Router>
      );
    }
  }
}
export default App;