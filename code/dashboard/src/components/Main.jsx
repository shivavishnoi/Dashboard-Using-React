import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Articles from './Articles';
import SingleArticle from './SingleArticle';
import Home from './Home';
import Books from './Books';
import People from './People';
function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:id" component={SingleArticle}></Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/help" exact>
          <h1>Help & support</h1>
        </Route>
        <Route path="*">
          <h1>404 Error</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
