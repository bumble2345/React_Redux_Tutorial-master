import React,{Suspense,lazy} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import "./App.css";

const ProductListing = lazy(() => import('./containers/ProductListing'));
const ProductDetails = lazy(() => import('./containers/ProductDetails'));
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/movieInfo/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
