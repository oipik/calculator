import { useState } from "react";

import signal from "../images/signal.png";
import wifi from "../images/wifi.png";
import battery from "../images/battery.png";

import signalWhite from "../images/white/signal_white.png";
import wifiWhite from "../images/white/wifi_white.png";
import batteryWhite from "../images/white/battery_white.png";

import light from "../images/light.png";
import dark from "../images/dark.png";

import './app.scss';

import Button from "./Button";

function App() {
    const [theme, setTheme] = useState("light");

    const getTime = () => {
        const date = new Date();
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        return hours + ":" + minutes;
    }

    const changeTheme = () => {
        console.log("hello")
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div className="wrapper">
            <div className="calc">
                <div className="calc__window">
                    <div className="calc__sidebar">
                        <p className="calc__bar">{getTime()}</p>
                        <div className="calc__icons">
                            <img src={theme === "light" ? signal : signalWhite} alt="signal" />
                            <img src={theme === "light" ? wifi : wifiWhite} alt="wifi" />
                            <img src={theme === "light" ? battery : batteryWhite} alt="battery" />
                        </div>
                    </div>
                    <div className="calc__values">
                        <p className="first">Первое</p>
                        <p className="second">Второе</p>
                    </div>
                </div>
                <div className="calc__buttons">
                    <Button changeTheme={changeTheme}><img src={theme === "light" ? light : dark} alt="theme"/></Button>
                    <Button>%</Button>
                    <Button>/</Button>
                    <Button>*</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>-</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>+</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>AC</Button>
                    <Button>0</Button>
                    <Button>.</Button>
                    <Button>=</Button>
                </div>
                <hr className="calc__indicator"/>
            </div>
        </div>
    );
}

export default App;
