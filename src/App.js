
import './App.css';
import './pages/review-form/reviewForm.component';
import ReviewForm from './pages/review-form/reviewForm.component';
import CandidatesData from './pages/candidates-list/candidatesList.component';
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
