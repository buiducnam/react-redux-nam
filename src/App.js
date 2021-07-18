import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import ShowContent from './utils/ShowContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <ShowContent />
      </div>
    </Router>
  );
}

export default App;
