import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation>
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
      </MainNavigation>
    </div>
  );
}

export default App;
