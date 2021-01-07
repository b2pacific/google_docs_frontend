import { BrowserRouter, Redirect, Route } from "react-router-dom";
import GroupEditor from "./groupEditor";
import SyncingEditor from "./syncingEditor";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        component={GroupEditor}
      />
      <Route path="/group/:id" render={(props) => {
      const id = props.match.params.id;
      
      return <SyncingEditor groupId = {id} />
      }} />
    </BrowserRouter>
  );
};

export default App;
