import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register';
import Title from './components/Title';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import UsersCollection from './components/UsersCollection';
import CreateProduct from './components/CreateProduct';
import ProductCollection from './components/ProductCollection';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }}
    >

      <Router>
        <Title setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/users">
            <UsersCollection />
          </Route>
          <Route path="/create-product">
            <CreateProduct />
          </Route>
          <Route path="/products">
            <ProductCollection />
          </Route>
          <Route exact path="/">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
