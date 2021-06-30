import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles.scss';

import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>

          <Switch>

            <Route exact path="/">

              <Home />

            </Route>

            <Route exact path="/signup">

              <Signup />

            </Route>

            <Route exact path="/login">

              <Login />

            </Route>

          </Switch>

        </main>

      </div>
    </Router>
  );
}

export default App;