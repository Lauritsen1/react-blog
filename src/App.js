import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles.scss';

import AuthProvider from "./auth";
import Header from './components/header/header';
import Home from './pages/home/home';
import SinglePost from "./pages/singlePost/SinglePost";
import Register from './components/register/register';
import Login from './components/login/login';


function App() {
  return (

    <div className="App">
      <Router>

        <AuthProvider>

          <Header />

          <main>

            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/post/:id" component={SinglePost} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

            </Switch>

          </main>

        </AuthProvider>

      </Router>
    </div>

  );
}

export default App;