import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Q1">Q1</Link>
              </li>
              <li>
                <Link to="/Q2">Q2</Link>
              </li>
              <li>
                <Link to="/Q3">Q3</Link>
              </li>
              <li>
                <Link to="/Q4">Q4</Link>
              </li>
              <li>
                <Link to="/Q5">Q5</Link>
              </li>
              <li>
                <Link to="/Q6">Q6</Link>
              </li>
              <li>
                <Link to="/Q7">Q7</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Q1">
              <Home question="Question 1" />
            </Route>
            <Route path="/Q2">
              <Home question="Question 2" />
            </Route>
            <Route path="/Q3">
              <Home question="Question 3" />
            </Route>
            <Route path="/Q4">
              <Home question="Question 4" />
            </Route>
            <Route path="/Q5">
              <Home question="Question 5" />
            </Route>
            <Route path="/Q6">
              <Home question="Question 6" />
            </Route>
            <Route path="/Q7">
              <Home question="Question 7" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home(props) {
  // constructor(props) {
  //   super(props);
  // }
  return <h2>{props.question}</h2>;
}

export default App;
