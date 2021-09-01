import './App.css';
import Navbar from "./components/navbar/Navbar"
import FormField from "./components/formfield/FormField"
import Button from './components/button/button';
import Counter from './components/counter/counter'
import React from 'react';

export default class App extends React.Component() {
  render() {
    return (
      <div className="App">
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <Button />
        <Counter />
      </div>
    );
  }
}


