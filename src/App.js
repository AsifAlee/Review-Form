import logo from './logo.svg';
import './App.css';
import './components/review_form/review_form.component';
import ReviewForm from './components/review_form/review_form.component';


function App() {
  return (
   
      <div className="container">
        <form>
          <ReviewForm   />
        </form>
         
      </div>

      
  );
}

export default App;
