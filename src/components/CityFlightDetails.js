import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CityFlightDetails({ city, airport, fromLoc }) {

    const [data, setData] = useState(null);
    //const [startDates, setStartDates] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        (() => {
            let date = new Date();
            let todayDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            setIsLoading(true);
            let URL = "https://api.skypicker.com/flights?flyFrom=PRG&to=" + airport + "&dateFrom=" + todayDate + "&dateTo=" + todayDate + "&partner=picky&v=3"

            if (fromLoc) {
                URL = "https://api.skypicker.com/flights?flyFrom=" + fromLoc + "&to=" + airport + "&dateFrom=" + todayDate + "&dateTo=" + todayDate + "&partner=picky&v=3"
            }
            axios.get(URL).then(data => {
                if (isMounted) {
                    console.log(data)
                    setData(data);
                    setIsLoading(false);
                }
            }).catch(console.log("err"))

        })();
        return () => { isMounted = false; };
    });

    let renderTime = function (epochTime) {
        let date = new Date(0)
        date.setUTCSeconds(epochTime)
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
    };

    // const changeFunction = function () {
    //     var selectBox = document.getElementById("selectBox");
    //     if (selectBox)
    //         var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //     console.log(selectedValue);
    // }

    // let setStartDate = function (date) {
    //     console.log(date);
    // }

    return (
        <div class="row">
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="pokemon custWidth" >
                    <div className="pokemon__name">
                        <p>{city}</p>
                    </div>
                    {/* <div className="pokemon__meta">
                        <span>{city.title}</span>
                        <span>{city.title}</span>
                    </div> */}
                    <ul div class="col-md-12">
                        {data && data.data && data.data.data && data.data.data.map(item => (

                            <li key={item.id} class="col-md-4">
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