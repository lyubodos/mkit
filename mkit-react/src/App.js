import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header/Header';

function App() {
  return (
   <Router>
     <Header/>
   </Router>
  );
}

export default App;
