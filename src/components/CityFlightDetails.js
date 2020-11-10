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
                "https://api.skypicker.com/flights?flyFrom=PRG&to=AMS&dateFrom=11/11/2020&dateTo=11/11/2020&partner=picky&v=3"
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

    let renderTime = function (epochTime) {
        let date = new Date(0)
        date.setUTCSeconds(epochTime)
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
    };

    let changeFunction = function () {
        var selectBox = document.getElementById("selectBox");
        if (selectBox)
            var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        //alert(selectedValue);
    }

    return (
        <div>
            From City:<select id="selectBox" onChange={changeFunction()}>
                <option value="PRG">Prague</option>
                <option value="CDG">Paris</option>
                <option value="FRA">Frankfurt</option>
            </select>
            {isLoading ? (<div> Loading ...</div >) : (
                <div className="pokemon custWidth" >
                    <div className="pokemon__name">
                        <p>{city}</p>
                    </div>
                    {/* <div className="pokemon__meta">
                        <span>{city.title}</span>
                        <span>{city.title}</span>
                    </div> */}
                    <ul>
                        {data && data.data && data.data.data && data.data.data.map(item => (

                            <li key={item.id}>
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