import React from 'react';
import './App.css';
import { CitiesListContainer } from './containers/CitiesListContainer';
import Title from './components/Title';
import DateContainer from './components/DateContainer';

export function App() {
  return (
    <main>
      <Title content="PickMyOfficeLocation" />
      <span>Choose office location on</span><DateContainer />
      <h2>Current Weather and Flights</h2>

      <CitiesListContainer />
    </main>
  )
}

