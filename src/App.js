import './Style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calender from './Pages/Calender';
import SearchProperty from './Pages/SearchProperty';
import Client from './Pages/Client';
import Lists from './Pages/Lists';
import Notifications from './Pages/Notifications';
import Teams from './Pages/Teams';
import HelpDesk from './Pages/HelpDesk';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/calendar' element={<Calender/>}/>
          <Route exact path='/search' element={<SearchProperty/>}/>
          <Route exact path='/client' element={<Client/>}/>
          <Route exact path='/lists' element={<Lists/>}/>
          <Route exact path='/notifications' element={<Notifications/>}/>
          <Route exact path='/teams' element={<Teams/>}/>
          <Route exact path='/help' element={<HelpDesk/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
