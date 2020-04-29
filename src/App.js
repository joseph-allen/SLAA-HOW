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
              <Home number={1} question="Question 1. What is sex and love addiction?
 Read the twelve characteristics of sex and love addiction. Underline any words or concepts you are unfamiliar with and discuss them with your sponsor. Also underline passages that you identify with or that remind you of your own behaviour. Discuss these on your daily outreach calls and also with your sponsor.
" />
            </Route>
            <Route path="/Q2">
              <Home number={2} question="Question 2. Read Step 1 from the SLAA Basic Text (pp.68-70). Do you identify as a sex addict, a love addict, an anorexic or all of these ? Referring to examples from your life, discuss how you have acted out (or in) in these areas in the past." />
            </Route>
            <Route path="/Q3">
              <Home number={3} question="Question 3. Read the ’40 Questions for Self-Diagnosis’. Tick the behaviours you most identify with. Choose the 10 most relevant and write a few sentences on each using specific examples from your past." />
            </Route>
            <Route path="/Q4">
              <Home number={4} question="Question 4. Read the S.L.A.A literature on anorexia as it relates to S.L.A.A .(sexual, social and emotional anorexia). Do you relate to any of these behaviours? Discuss." />
            </Route>
            <Route path="/Q5">
              <Home number={5} question="Question 5. Read ‘The Withdrawal Experience’ in the S.L.A.A. Basic Text and also the ‘Withdrawal’ pamphlet. Have you ever experienced withdrawal in Relation to sex and love/relationship? (e.g. when a relationship has ended or was terminated)." />
            </Route>
            <Route path="/Q6">
              <Home number={6} question="Question 6. Read what you can on the topic ‘Is it Love or is it Addiction?’ Note anything that is meaningful to you. Discuss and reflect on what you have learnt. Read ‘What is Acting Out?’ and ‘What are Slips?’ from the ‘Questions Beginners Ask’ pamphlet. Have you tried to control your compulsive behaviour in the past? How have you ‘slipped’ and ‘acted out’ after decisions to behave differently?" />
            </Route>
            <Route path="/Q7">
              <Home number={7} question="Question 7. Read the pamphlets ‘Se\ng Bottom Lines’ and ‘Se\ng Top Lines.’ Write a list of the obvious behaviours that you would consider necessary to bottom-line or top-line. Write a list of more subtle behaviours that you suspect may cause you trouble. Discuss these with your sponsor to arrive at bottom-line and/or top line behaviours for the 30 day Step 1,2 and 3 period. Absolute honesty is necessary to combat Sex and Love Addiction." />
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
  return (
    <div>
      <Link to={"/Q" + (props.number - 1)}  >{"<"} Question {props.number - 1} </Link>
      <Link to={"/Q" + (props.number + 1)} >Question {props.number + 1}{">"}</Link>
      <h2>{props.question}</h2>
    </div>
  )
    ;
}

export default App;
