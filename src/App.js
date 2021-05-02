import React from 'react'
import { Provider } from 'react-redux';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import store from './store';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';



function App() {
  return (
    <Provider store={store}>  
    <Router>
    <div className="App">
    <header className="App-header">
      <h2 className="text-primary"> React Project </h2>
      <Navbar/>
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/add-contact" component={AddContact}/>
            <Route exact path="/edit-contact/:id" component={EditContact}/>
          </Switch>
        </div>
      </div>
    </header>
  </div> 
    </Router>
  </Provider>
   
  );
}

export default App;
