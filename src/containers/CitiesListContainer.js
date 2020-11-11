import React from 'react';
import { CityWeatherDetails } from '../components/CityWeatherDeatils';
import { CityFlightDetails } from '../components/CityFlightDetails';

export function CitiesListContainer() {
    const cities = [
        {
            id: 1,
            title: "Amsterdam",
            airport: "AMS"
        },
        {
            id: 2,
            title: "Madrid",
            airport: "MAD"
        },
        {
            id: 3,
            title: "Budapest",
            airport: "BUD"
        }
    ]


    const displayCitiesInformation = (city) => {

        let selectBox = document.getElementById("selectBox")
        if (selectBox)
            var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        return (
            <div>
                <CityWeatherDetails key={city.id} city={city.title} />
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
                From City:<select name="selectCity" id="selectBox" onChange={() => displayInfo()}>
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