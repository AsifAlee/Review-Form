
import './App.css';
import './components/review_form/review_form.component';
import ReviewForm from './components/review_form/review_form.component';
import CandidatesData from './components/candidates-data/candidates-data.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ReviewForm} />
          <Route path='/candidates' component={CandidatesData} />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
