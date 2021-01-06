import { BrowserRouter, Redirect, Route } from "react-router-dom";
import GroupEditor from "./groupEditor";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => {
          return <Redirect to={`/group/${Date.now()}`} />;
        }}
      />
      <Route path="/group/:id" component={GroupEditor}/>
    </BrowserRouter>
  );
};

export default App;
