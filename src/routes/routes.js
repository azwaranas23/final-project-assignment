import { BrowserRouter, Route, Switch } from 'react-router-dom';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/article/:id" component={IndonesiaPage} />
      <Route path="/article/:id" component={ProgrammingPage} />
      <Route path="/article/:id" component={Covid19Page} />
    </Switch>
  </BrowserRouter>
);

export default routes;