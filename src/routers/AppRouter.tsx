import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Datos } from "../modules/datos/Datos";
import { Home } from '../modules/home/Home';
import { Plan } from "../modules/plan/Plan";
import { Saludo } from "../modules/saludo/Saludo";
import store from '../redux/store';
import createHistory from 'history/createBrowserHistory';
// const history = createHistory();
export const AppRouter = () => {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/datos" component={ Datos } />
            <Route path="/plan" component={ Plan } />
            <Route exact path="/saludo" component={ Saludo } />
            {/* <Route exact path="/bienvenido" component={ BienvenidoRimac } /> */}
          </Switch>
        </Router>
      </Provider>
    )
}
