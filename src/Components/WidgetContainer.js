import React, { useState, useEffect } from 'react';
import CardWidget from './CardWidget';
import { Button, Switch } from "@mui/material";
import CssTextField from './CssTextField';


const WidgetContainer = () => {
    const [ postalCode, setPostalCode ] = useState("");
    const [ temp, setTemp ] = useState("");
    const [ low, setLow ] = useState("");
    const [ high, setHigh ] = useState("");
    const [ name, setName ] = useState("");
    const [ humidity, setHumidity ] = useState("");
    const [ wind, setWind ] = useState("");
    const [ iconSrc, setIconSrc] = useState("");
    const [ error, setError] = useState("");
    const [ throwError, setThrowError ] = useState(false);
    const [ unit, setUnit ] = useState("imperial");
    const [ cardsArray, setCardsArray ] = useState([]);
    

    const handleChange = (e) => {
        setThrowError(false);
        setError("");
        setPostalCode(e.target.value);

    };

    const addClick = () => {
        const numbers = /^[0-9]+$/;
        if (postalCode.match(numbers) && (postalCode.length === 5) && (throwError === false)) {
        setCardsArray(cardsArray.concat(<CardWidget postalcode={postalCode} temp={temp} high={high} low={low} name={name} humidity={humidity} wind={wind} iconSrc={iconSrc} unit={unit} />));
        setPostalCode("");
        } else {
            setThrowError(true);
            setError("Please enter a valid US Postal Code.");
        };
    };

    const switchClick = () => {
        if (unit === "imperial") {
        setUnit("metric");
        } else {
            setUnit("imperial");
        };
    };

    useEffect(() => {
        async function getData() {
            if (postalCode.length === 5) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${postalCode}&appid=08ae26db35bfb91bc67554604ba4e50f&units=${unit}`);
                const weatherData = await response.json();
                const temp = await weatherData.main.temp;
                setTemp(temp);
                const high = await weatherData.main.temp_max;
                setHigh(high);
                const low = await weatherData.main.temp_min;
                setLow(low);
                const name = await weatherData.name;
                setName(name);
                const humidity = await weatherData.main.humidity;
                setHumidity(humidity);
                const wind = await weatherData.wind.speed;
                setWind(wind);
                const iconSrc = await weatherData.weather[0].icon;
                setIconSrc(iconSrc);
            } catch(err) {
                let error = err.toString();
                console.log(error);
                setThrowError(true);
                setError("Please enter a valid US Postal Code.");
            };
        };
    };
        getData();
    }, [ temp, high, low, postalCode, unit ]);

    return (
    <div id="widgetContainer">
        <div id="searchContainer">
                <div id="search">
                    <CssTextField 
                        InputLabelProps={{style: { 
                        fontFamily: 'Bebas Neue', 
                        fontSize: '1.25em', }}} 
                        id="outlined-basic" 
                        label="Postal Code" 
                        variant="outlined" 
                        size="small" 
                        value={postalCode}
                        onChange={handleChange}
                        error={throwError}
                        helperText={error}
                    />
                    <Button  style={{ 
                        fontFamily: 'Bebas Neue', 
                        fontSize: '1.25em', 
                        padding: '0px 60px' }} 
                        color="secondary" 
                        variant="contained"
                        onClick={addClick}>
                    ADD</Button>
                </div>
                <div id="switch">
                    <div id="label-left">
                        &deg;F
                    </div>
                    <Switch 
                        onClick={switchClick}/>
                    <div id="label-right">
                        &deg;C
                    </div>
                </div>
        </div>
        <div id="cardContainer">
            {cardsArray}
        </div>
    </div>
    );
} 

export default WidgetContainer