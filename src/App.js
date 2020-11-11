import React from 'react';
import './App.css';
import { CitiesListContainer } from './containers/CitiesListContainer';
import DateContainer from './components/DateContainer';
import { Navbar } from 'react-bootstrap';

export function App() {
  return (
    <main>
      <Navbar bg="light" expand="lg">
        <h1>Pickmylocation</h1>
      </Navbar>
      <span>Choose office location to go on</span><DateContainer />
      <h2>Current Weather and Flights</h2>

      <CitiesListContainer />
    </main>
  )
}



