import {Route,Switch,BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';

const App = () => (
<BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/features" component={Features}/>
    <Route exact path="/contact" component={Contact}/>
  </Switch>
</BrowserRouter>
)

export default App;
