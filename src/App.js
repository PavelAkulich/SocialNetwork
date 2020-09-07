import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/*<Route component={Dialogs} path='/dialogs'/>*/}
          <Route
            render={() => <DialogsContainer />}
            path='/dialogs' />
          <Route render={() => <Profile />}
            path='/profile' />
          <Route render={() => <News />} path='/news' />
          <Route render={() => <Music />} path='/music' />
          <Route render={() => <Setting />} path='/setting' />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
