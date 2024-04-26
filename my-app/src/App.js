import css from './App.module.css';
import Sidebar from './components/Sidebar.js';
import NavBarSimple from './components/NavBarSimple.js'
import NavBarForm from './components/NavBarForm.js';
import RenderingLists from './components/RenderingLists.js';
import ContentAPI from './components/ContentAPI.js'
import LifeCyclesCDM from './components/LifeCyclesCDM.js';
import LifeCyclesCDU from './components/LifeCycleCDU.js';
import LifeCyclesCWU from './components/LifeCyclesCWU.js';
import SearchBar from './components/SearchBar.js';
import ControlledFormHooks from './components/ControlledFormHooks.js';
import UseStateWithObjects from './components/UseStateWithObjects.js';
import UseEffectCounterContainer from './components/UseEffectCounterContainer.js';
import HTTPPost from './components/HTTPPost.js';
import HTTPHooks from './components/HTTPHooks.js';


function App() {
  return (
    <div className={css.App}>
      
     {/*<NavBarSimple />*/}
     
      <NavBarForm />
      <Sidebar />
      <ContentAPI />
      
      {/* Add your components here */}
      {/*<SearchBar />*/}
      

    </div>
  );
}

export default App;