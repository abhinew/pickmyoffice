import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityFlightDetails({ city, airport, fromLoc }) {

    const [data, setData] = useState(null);
    const [startDates, setStartDates] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let date = new Date();
        console.log(date)
        let todayDate = date.getDate() + "/" + Number(date.getMonth() + 1) + "/" + date.getFullYear();
        setIsLoading(true);
        let url = "https://api.skypicker.com/flights?flyFrom=PRG&to=" + airport + "&dateFrom=" + todayDate + "&dateTo=" + todayDate + "&partner=picky&v=3"
        console.log(url)
        if (fromLoc) {
            url = "https://api.skypicker.com/flights?flyFrom=" + fromLoc + "&to=" + airport + "&dateFrom=" + todayDate + "&dateTo=" + todayDate + "&partner=picky&v=3"
        }
        axios.get(url).then(({ data }) => {
            setData(data);
            setIsLoading(false);
        }).catch((e) => {
            console.log(e)
        })
    }, [fromLoc]);

    let renderTime = function (epochTime) {
        let date = new Date(0)
        date.setUTCSeconds(epochTime)
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
    };


    return (
        <div>
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="col-md-12" >
                    <div className="pokemon__name">
                        <p>{city}</p>

                    </div>
                    <ul >
                        {data && data.data && data.data.map(item => (

                            <li key={item.id} className="col-md-4">
                                <div>Arrival:<span>{renderTime(item.aTime)}</span></div>
                                <div>Departure:<span>{renderTime(item.dTime)}</span></div>
                                <div>Price:<span>{item.price}</span></div>
                                <div>Duration:<span>{item.fly_duration}</span></div>

                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    );
}