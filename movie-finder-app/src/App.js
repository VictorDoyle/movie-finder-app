import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation'
import routes from './config/routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      { routes }
    </div>
  );
}

export default App;
