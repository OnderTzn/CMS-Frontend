import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route exact path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
