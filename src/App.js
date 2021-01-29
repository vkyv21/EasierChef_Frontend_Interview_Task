import RecipeWrapper from './features/recipeWrapper';
import AddRecipe from './features/addRecipe';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <ul>
            <li>
            <NavLink to="/addRecipe" activeClassName="selected">Add New Recipe</NavLink>
            </li>
            <li>
            <NavLink to="/home" activeClassName="selected">Go to home</NavLink>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/addRecipe">
            <AddRecipe />
          </Route>
          <Route path="/home">
            <RecipeWrapper />
          </Route>
          
          <Route path="/" render={() => {
              return (
                <Redirect to="/home" />
              )
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
