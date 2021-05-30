import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './conteiners/homeScreen/HomeScreen';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-rvn fixed-top">
            <p> Ravn Star Wars Registry</p>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/:id" component={HomeScreen}/>
          <Route exact path="/" component={HomeScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
