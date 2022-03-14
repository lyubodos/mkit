import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';


function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/search" component={Search} />
       <Route path="/movies" component={Movies}/>
     </Switch>
   </Router>
  );
}

export default App;
