import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityWeatherDetails({ city }) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        (() => {
            setIsLoading(true);
            axios.get(
                "http://dataservice.accuweather.com/forecasts/v1/daily/1day/2140993?apikey=Pg0NhuXu5jYrqelukGHYQfgYifVdC0P0"
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