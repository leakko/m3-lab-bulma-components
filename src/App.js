import './App.css';
import Navbar from "./components/navbar/Navbar"
import FormField from "./components/formfield/FormField"
import CoolButton from './components/coolbutton/CoolButton';
import Signup from './components/signup/Signup'

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Signup/>
        {/* <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        
        <CoolButton/>
        */}

      </div>
    );
  }
}


