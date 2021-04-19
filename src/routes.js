import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import {
  Login,
  Signup,
  UserHome,
  NewCharacterForm,
  AllSpells,
  SingleSpell,
  CharacterSpellbook,
} from "./components";
import { me } from "./store";
import { fetchCharacters } from "./store/characters";

const Routes = () => {
  const isLoggedIn = useSelector((state) => {
    return !!state.user.id;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(me());
  }, []);

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/home" component={UserHome} />
          <Route exact path="/newcharacterform" component={NewCharacterForm} />
          <Route exact path="/allSpells" component={AllSpells} />
          <Route exact path="/allSpells/:spellIndex" component={SingleSpell} />
          <Route
            exact
            path="/characters/:characterId"
            component={CharacterSpellbook}
          />
          <Route path="/" component={UserHome} />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
