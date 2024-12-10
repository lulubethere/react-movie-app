import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </div>
  </Router>
}

export default App;
