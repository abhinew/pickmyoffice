import React from 'react';
import './App.css';
import { CitiesListContainer } from './containers/CitiesListContainer';
import DateContainer from './components/DateContainer';

export function App() {
  return (
    <main>
      <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">PickMyOfficeLocation</span>
      </nav>
      <span>Choose office location to go on</span><DateContainer />
      <h2>Current Weather and Flights</h2>

      <CitiesListContainer />
    </main>
  )
}



