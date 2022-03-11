import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import Home from './components/Pages/Home/Home';

function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/" component={Home} exact/>
     </Switch>
   </Router>
  );
}

export default App;
