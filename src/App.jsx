import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './content/components/Layout';
import About from "./content/pages/about";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <About logo={logo}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
