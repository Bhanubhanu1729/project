import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/Counter';
import Greet1 from './components/Greet1';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';


function App() {
  return (
    <div className="App">
      <Inline/>
      {/* <Stylesheet primary={false}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting />  */}
      {/* <EventBind /> */}
      {/* <Classclick /> */}
      {/* < Functionclick /> */}
      {/* <Greet name="Bhanu" city="alwal"/> */}
      {/* <Counter/> */}
      {/* <Greet1 name="Bhanu" city="alwal"/> */}
      {/* <Greet1  name="Teja" city="uppal"/> */}
    </div>
  );
}

export default App;
