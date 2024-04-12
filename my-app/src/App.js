import css from './App.module.css';
import Sidebar from './components/Sidebar.js';
import NavBarSimple from './components/NavBarSimple.js'

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      
      {/* Add your components here */}
    </div>
  );
}

export default App;