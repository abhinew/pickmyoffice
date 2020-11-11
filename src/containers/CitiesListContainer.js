import React from 'react';
import { CityWeatherDetails } from '../components/CityWeatherDeatils';
import { CityFlightDetails } from '../components/CityFlightDetails';

export function CitiesListContainer() {
    const cities = [
        {
            id: 1,
            title: "Amsterdam",
            airport: "AMS",
            key: 2140993

        },
        {
            id: 2,
            title: "Madrid",
            airport: "MAD",
            key: 308526
        },
        {
            id: 3,
            title: "Budapest",
            airport: "BUD",
            key: 2140993
        }
    ]


    const displayCitiesInformation = (city) => {

        let selectBox = document.getElementById("selectBox")
        if (selectBox)
            var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        return (
            <div>
                <CityWeatherDetails key={city.id} city={city} />
                <CityFlightDetails key={city.id} city={city.title} airport={city.airport} fromLoc={selectedValue} />
            </div>)
    }
    const displayInfo = () => {
        cities && cities.map(city => (
            displayCitiesInformation(city)
        ))
    }


    return (
        <div className="container">
            <row>
                Choose your city:<select name="selectCity" id="selectBox" onChange={() => displayInfo()}>
                    <option value="PRG">Prague</option>
                    <option value="CDG">Paris</option>
                    <option value="FRA">Frankfurt</option>
                </select>

            </row>

            {
                cities && cities.map(city => (
                    displayCitiesInformation(city)
                ))}
        </div>
    );
}