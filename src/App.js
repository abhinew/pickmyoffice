import React from 'react';
import './App.css';
import { CitiesListContainer } from './containers/CitiesListContainer';
import Title from './components/Title';
import DateContainer from './components/DateContainer';

export function App() {
  return (
    <main>
      <Title content="PickMyOffice" />
      <span>Choose office location on</span><DateContainer /><span>from</span><input type="text" name="fromCity" />
      <h2>Current Weather</h2>
      <CitiesListContainer />
    </main>
  )
}

