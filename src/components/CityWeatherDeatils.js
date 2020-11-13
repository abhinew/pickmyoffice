import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityWeatherDetails({ city }) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let key = city.key
        setIsLoading(true);
        axios.get(
            "https://dataservice.accuweather.com/forecasts/v1/daily/1day/" + key + "?apikey=8nObHWIFp1XgeVk4rZJw4rGS0wY1Dsly"
        ).then(({ data }) => {
            setData(data);
            setIsLoading(false);

        }).catch((e) => {
            console.log(e)
        })

    }, []);

    return (
        <div>
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="col-md-12">
                    <div className="pokemon__name">
                        <p>{city.title}</p>
                    </div>
                    <p>{data && data.Headline.Text}</p>
                    <ul>
                        {data && data.DailyForecasts.map(item => (
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