import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Accueil from '../Accueil/Accueil'
import Conversation from '../Conversation/Conversation'
import Historique from '../Historique/Historique'

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.Accueil} component={Accueil} />
      <Route exact path={ROUTES.Conversation} component={Conversation} />
      <Route exact path={ROUTES.Historique} component={Historique} />
    </div>
  </Router>
);
export default App;