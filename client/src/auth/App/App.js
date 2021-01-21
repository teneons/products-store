import {BrowserRouter as Router} from 'react-router-dom';
import {routes} from '../routes/routes';
import {useAuth} from '../../hooks/authHook';

function App() {
  const rts = routes(false)
  const {signIn, signOut, token, id} = useAuth()

  return (
    <div className="App">
      <Router>
        {rts}
      </Router>
    </div>
  );
}

export default App;
