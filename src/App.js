import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          {/*<Route component={Dialogs} path='/dialogs'/>*/}
          <Route
            render={() => <DialogsContainer />}
            path='/dialogs' />
          <Route render={() => <ProfileContainer />}
            path='/profile/:userId?' />
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
