import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityWeatherDetails({ city }) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let cityKey = city.key;
        let isMounted = true;
        (() => {
            setIsLoading(true);
            axios.get(
                "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + cityKey + "?apikey=vcM8xAfHgr9mYfFW38Ju0NXiI3Bfqdoz"
            ).then(data => {
                if (isMounted) {
                    console.log(data)
                    setData(data);
                    setIsLoading(false);
                }
            }).catch((e) => {
                console.log(e)
            })

        })();
        return () => { isMounted = false; };
    }, []);

    return (
        <div>
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="col-md-12">
                    <div className="pokemon__name">
                        <p>{city.title}</p>
                    </div>
                    <p>{data && data.data && data.data.Headline.Text}</p>
                    <ul>
                        {data && data.data && data.data && data.data.DailyForecasts.map(item => (
                            <li key={item.id}>
                                <span>{item.Temperature.Minimum.Value}</span><span>&#8457;</span>/
                                <span>{item.Temperature.Minimum.Value}</span><span>&#8457;</span>
                                <span>{}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    );
}