import React from "react";
import List from "./List";
import Form from "./Form";
import Totals from "./Totals"

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Fetch a Joke</h2>
      <Form />
    </div>     
    <div className="col-md-4 offset-md-1">
    <br />
      <h2>Vote History</h2>
      <List />
    </div> 
  </div>
);

export default App;
