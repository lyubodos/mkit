import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';

function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/search" component={Search} />
     </Switch>
   </Router>
  );
}

export default App;
