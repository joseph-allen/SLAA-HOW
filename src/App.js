import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <div>
          <Container maxWidth="lg">
            <Grid container justify="center" spacing={4} className={classes.root}>
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  {/* Defining bottom lines */}
                  <Typography variant="h4" gutterBottom>
                    Defining Sobreity
                  </Typography>
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Link to="/Q1"><Button>Q1</Button></Link>
                    <Link to="/Q2"><Button>Q2</Button></Link>
                    <Link to="/Q3"><Button>Q3</Button></Link>
                    <Link to="/Q4"><Button>Q4</Button></Link>
                    <Link to="/Q5"><Button>Q5</Button></Link>
                    <Link to="/Q6"><Button>Q6</Button></Link>
                    <Link to="/Q7"><Button>Q7</Button></Link>
                  </ButtonGroup>
                </Grid>
              </Paper>

              <Paper className={classes.paper}>
                <Grid item xs={12} spacing={2}>
                  <Typography variant="h4" gutterBottom>
                    Step Questions
                  </Typography>
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Link to="/SQ1"><Button>Q1</Button></Link>
                    <Link to="/SQ2"><Button>Q2</Button></Link>
                    <Link to="/SQ3"><Button>Q3</Button></Link>
                    <Link to="/SQ4"><Button>Q4</Button></Link>
                    <Link to="/SQ5"><Button>Q5</Button></Link>
                    <Link to="/SQ6"><Button>Q6</Button></Link>
                    <Link to="/SQ7"><Button>Q7</Button></Link>
                    {/* <Link to="/SQ8"><Button>Q8</Button></Link>
                  <Link to="/SQ9"><Button>Q9</Button></Link>
                  <Link to="/SQ10"><Button>Q10</Button></Link>
                  <Link to="/SQ11"><Button>Q11</Button></Link>
                  <Link to="/SQ12"><Button>Q12</Button></Link>
                  <Link to="/SQ13"><Button>Q13</Button></Link>
                  <Link to="/SQ14"><Button>Q14</Button></Link>
                  <Link to="/SQ15"><Button>Q15</Button></Link>
                  <Link to="/SQ16"><Button>Q16</Button></Link>
                  <Link to="/SQ17"><Button>Q17</Button></Link>
                  <Link to="/SQ18"><Button>Q18</Button></Link>
                  <Link to="/SQ19"><Button>Q19</Button></Link>
                  <Link to="/SQ20"><Button>Q20</Button></Link>
                  <Link to="/SQ21"><Button>Q21</Button></Link>
                  <Link to="/SQ22"><Button>Q22</Button></Link>
                  <Link to="/SQ23"><Button>Q23</Button></Link>
                  <Link to="/SQ24"><Button>Q24</Button></Link>
                  <Link to="/SQ25"><Button>Q25</Button></Link>
                  <Link to="/SQ26"><Button>Q26</Button></Link>
                  <Link to="/SQ27"><Button>Q27</Button></Link>
                  <Link to="/SQ28"><Button>Q28</Button></Link>
                  <Link to="/SQ29"><Button>Q29</Button></Link>
                  <Link to="/SQ30"><Button>Q30</Button></Link> */}
                  </ButtonGroup>
                </Grid>
              </Paper>

              <Switch>
                {/* Make home route */}
                <Route path="/Q1">
                  <Home number={1} question="What is sex and love addiction?
 Read the twelve characteristics of sex and love addiction. Underline any words or concepts you are unfamiliar with and discuss them with your sponsor. Also underline passages that you identify with or that remind you of your own behaviour. Discuss these on your daily outreach calls and also with your sponsor.
" />
                </Route>
                <Route path="/Q2">
                  <Home number={2} question="Read Step 1 from the SLAA Basic Text (pp.68-70). Do you identify as a sex addict, a love addict, an anorexic or all of these ? Referring to examples from your life, discuss how you have acted out (or in) in these areas in the past." />
                </Route>
                <Route path="/Q3">
                  <Home number={3} question="Read the ’40 Questions for Self-Diagnosis’. Tick the behaviours you most identify with. Choose the 10 most relevant and write a few sentences on each using specific examples from your past." />
                </Route>
                <Route path="/Q4">
                  <Home number={4} question="Read the S.L.A.A literature on anorexia as it relates to S.L.A.A .(sexual, social and emotional anorexia). Do you relate to any of these behaviours? Discuss." />
                </Route>
                <Route path="/Q5">
                  <Home number={5} question="Read ‘The Withdrawal Experience’ in the S.L.A.A. Basic Text and also the ‘Withdrawal’ pamphlet. Have you ever experienced withdrawal in Relation to sex and love/relationship? (e.g. when a relationship has ended or was terminated)." />
                </Route>
                <Route path="/Q6">
                  <Home number={6} question="Read what you can on the topic ‘Is it Love or is it Addiction?’ Note anything that is meaningful to you. Discuss and reflect on what you have learnt. Read ‘What is Acting Out?’ and ‘What are Slips?’ from the ‘Questions Beginners Ask’ pamphlet. Have you tried to control your compulsive behaviour in the past? How have you ‘slipped’ and ‘acted out’ after decisions to behave differently?" />
                </Route>
                <Route path="/Q7">
                  <Home number={7} question="Read the pamphlets ‘Se\ng Bottom Lines’ and ‘Se\ng Top Lines.’ Write a list of the obvious behaviours that you would consider necessary to bottom-line or top-line. Write a list of more subtle behaviours that you suspect may cause you trouble. Discuss these with your sponsor to arrive at bottom-line and/or top line behaviours for the 30 day Step 1,2 and 3 period. Absolute honesty is necessary to combat Sex and Love Addiction." />
                </Route>
                <Route path="/SQ1">
                  <Home number={1} question="Read the 'Doctor’s Opinion' in the AA ‘Big Book’. Write a history of your sex and love addiction beginning with the first Time you can remember related events. Discuss how many partners you have had (or not had in the case of anorexia), what medical/ psychological attention you have sought for the problem and your attempts at controlling your behaviour." />
                </Route>
                <Route path="/SQ2">
                  <Home number={2} question="Read Step 1 in the S.L.A.A. Basic Text. Discuss and reflect upon the effect sex and love addiction and anorexia has had upon you over the years. Do you truly see yourself as a sex and love addict?" />
                </Route>
                <Route path="/SQ3">
                  <Home number={3} question="Re-read Step 1 in the S.L.A.A. Basic Text. Discuss and reflect upon the following ideas found in Step 1 - the progressive nature of our disease and the need for unconditional surrender." />
                </Route>
                <Route path="/SQ4">
                  <Home number={4} question="Discuss and reflect upon the fatal nature of our disease as described on page 24 paragraph 2 in the ‘Twelve & Twelve’ AA Steps and Traditions Book. Focus on how the disease has diminished your life." />
                </Route>
                <Route path="/SQ5">
                  <Home number={5} question="Read Chapter 2 in the AA Big Book (‘There is a Solution’). Discuss and reflect upon the idea that your discipline or lack of it has played an important part in your life." />
                </Route>
                <Route path="/SQ6">
                  <Home number={6} question="Read Chapter 3 in the AA ‘Big Book’ (‘More about Alcoholism’) Discuss and reflect on this chapter." />
                </Route>
                <Route path="/SQ7">
                  <Home number={7} question="Discuss the idea that deception of others is nearly always rooted in deception of ourselves. How does this relate to your sexual relationship history? What have you done in the past, due to sex and love addiction, that reaffirms this idea?" />
                </Route>
              </Switch>
            </Grid>
          </Container>
        </div>
      </Router >
    </div >
  );
}

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Link to={"/Q" + (props.number - 1)}  >{"<"} Question {props.number - 1} </Link>
      <Link to={"/Q" + (props.number + 1)} >Question {props.number + 1}{">"}</Link>
      <Paper className={classes.paper}>
        <Typography variant="h2" gutterBottom>
          Question {props.number}
        </Typography>
        <h2>{props.question}</h2>
      </Paper>
    </div>
  )
    ;
}

export default App;
