import React, { useState } from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const CardWidget = (props) => {

    const { temp, high, low, name, humidity, wind, iconSrc, unit } = props;
    const [ remove, setRemove ] = useState(false);

    const removeCard = () => {
        setRemove(true);
    }

    if (!remove) {
        if (unit === "imperial") {
    return (
        <div className="cardWidget">
            <Card variant='outlined' style={{ minWidth: '300px', minHeight: '400px', backgroundColor: '#343a40', color: 'RGBA(255,255,255)' }}>
                <CardContent>
                    <div className="cardHeader">
                        <Typography variant='h4' component='div'>{name}</Typography>
                        <IconButton color="inherit" onClick={removeCard}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="icon">
                        <img src={`http://openweathermap.org/img/wn/${iconSrc}@2x.png`}></img>    
                    </div>
                    <div className="innerText">
                        <div className="tempField">
                            <ThermostatIcon />
                            <Typography variant='subtitle1'component='div'>{temp} &deg;F</Typography>
                        </div>
                        <div className="tempField">
                            <ArrowUpwardIcon />
                            <Typography variant='subtitle1'component='div'>{high} &deg;F</Typography>
                        </div>
                        <div className="tempField">
                            <ArrowDownwardIcon />
                            <Typography variant='subtitle1'component='div'>{low} &deg;F</Typography>
                        </div>
                        <div className="tempField">
                            <Typography variant='subtitle1'component='div'><strong>Wind Speed:</strong> {wind} mph</Typography>
                        </div>
                        <div className="tempField">
                            <Typography variant='subtitle1'component='div'><strong>Humidity:</strong> {humidity}%</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
        } else {
            return (
                <div className="cardWidget">
            <Card variant='outlined' style={{ minWidth: '300px', minHeight: '400px', backgroundColor: '#343a40', color: 'RGBA(255,255,255)' }}>
                <CardContent>
                    <div className="cardHeader">
                        <Typography variant='h4' component='div'>{name}</Typography>
                        <IconButton color="inherit" onClick={removeCard}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="icon">
                        <img src={`http://openweathermap.org/img/wn/${iconSrc}@2x.png`}></img>    
                    </div>
                    <div className="innerText">
                        <div className="tempField">
                            <ThermostatIcon />
                            <Typography variant='subtitle1'component='div'>{temp} &deg;C</Typography>
                        </div>
                        <div className="tempField">
                            <ArrowUpwardIcon />
                            <Typography variant='subtitle1'component='div'>{high} &deg;C</Typography>
                        </div>
                        <div className="tempField">
                            <ArrowDownwardIcon />
                            <Typography variant='subtitle1'component='div'>{low} &deg;C</Typography>
                        </div>
                        <div className="tempField">
                            <Typography variant='subtitle1'component='div'><strong>Wind Speed:</strong> {wind} kph</Typography>
                        </div>
                        <div className="tempField">
                            <Typography variant='subtitle1'component='div'><strong>Humidity:</strong> {humidity}%</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
            );
        };
    } else {
        return null;
    };
}

export default CardWidget