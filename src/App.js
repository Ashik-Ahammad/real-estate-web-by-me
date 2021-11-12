import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import AllProducts from './Components/AllProducts/AllProducts';
import Login from './Components/LOG IN/Login/Login';
import Register from './Components/LOG IN/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import Purchase from './Components/Purchase/Purchase';
import PrivateRoute from './Components/LOG IN/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
