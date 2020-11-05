import React from 'react';
import { CityWeatherDetails } from '../components/CityWeatherDeatils';
import { CityFlightDetails } from '../components/CityFlightDetails';

export function CitiesListContainer() {

    const cities = [
        {
            id: 1,
            title: "Amsterdam",
        },
        {
            id: 2,
            title: "Madrid",
        },
        {
            id: 3,
            title: "Budapest",
        }
    ]
    const displayCitiesInformation = (city) => {
        return (<div>
            <CityWeatherDetails key={city.id} city={city.title} />
            <CityFlightDetails key={city.id} city={city.title} />
        </div>)
    }


    return (
        <div className="container">
            {cities && cities.map(city => (
                displayCitiesInformation(city)
            ))}
        </div>
    );
}