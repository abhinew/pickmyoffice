import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityFlightDetails({ city }) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        (() => {
            setIsLoading(true);
            axios.get(
                "https://api.skypicker.com/flights?flyFrom=PRG&to=AMS&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3"
            ).then(data => {
                if (isMounted) {
                    console.log(data)
                    setData(data);
                    setIsLoading(false);
                }


            }).catch(console.log("err"))

        })();
        return () => { isMounted = false; };
    }, []);

    return (
        <div>
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="pokemon">
                    <div className="pokemon__name">
                        <p>{city}</p>
                    </div>
                    {/* <div className="pokemon__meta">
                        <span>{city.title}</span>
                        <span>{city.title}</span>
                    </div> */}
                    <p>{data && data.data && data.data.Headline.Text}</p>
                    <ul>
                        {data && data.data && data.data && data.data.DailyForecasts.map(item => (
                            <li key={item.id}>
                                <span>{item.Temperature.Minimum.Value}</span><span>&#8457;</span>
                                <span>{item.Temperature.Minimum.Value}</span><span>&#8457;</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    );
}