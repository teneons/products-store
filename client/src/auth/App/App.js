import {BrowserRouter as Router} from 'react-router-dom';
import {routes} from '../routes/routes';
import {useAuth} from '../../hooks/authHook';
import { authContext } from '../../Context/authContext';

function App() {
  const {token, id, logIn, logOut} = useAuth();
  const isAuth = !!token;
  const rts = routes(isAuth);

  return (
    <div className="App">
      <authContext.Provider value={{token, id, isAuth, logIn, logOut}}>
        <Router>
          {rts}
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
