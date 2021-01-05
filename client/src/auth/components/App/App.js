import {BrowserRouter as Router} from 'react-router-dom';
import {routes} from '../routes/routes';

function App() {
  const rts = routes(true)
  return (
    <div className="App">
      <Router>
        {rts}
      </Router>
    </div>
  );
}

export default App;
