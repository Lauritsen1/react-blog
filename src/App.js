import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles.scss';

import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import AuthProvider from "./auth";

function App() {
  return (

    <div className="App">
      <Router>

        <AuthProvider>

          <Header />

          <main>

            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />

            </Switch>

          </main>

        </AuthProvider>

      </Router>
    </div>

  );
}

export default App;