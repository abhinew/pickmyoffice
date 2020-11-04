import React from 'react';
import { City } from '../components/City';

export function CitiesListContainer() {
    const cities = [
        {
            id: 1,
            image: "https://coding.images/react.jpg",
            title: "Amsterdam",
            description: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
        },
        {
            id: 2,
            image: "https://animal.images/kid.jpg",
            title: "Madrid",
            description: "In fact, a kid is also the name of a baby goat!"
        },
        {
            id: 3,
            image: "https://another.nonexistent/image.jpg",
            title: "Budapest",
            description: "So yeah, you won't be able to look these images up. They're placeholders"
        }
    ]

    return (
        <div className="container">
            {cities && cities.map(city => <City key={city.id} city={city} />)}
        </div>
    );
}