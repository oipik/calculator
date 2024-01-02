import { useState } from "react";
import { evaluate } from "mathjs";

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
import { type } from "@testing-library/user-event/dist/type";

function App() {
    const [theme, setTheme] = useState("light");
    const [value, setValue] = useState("");
    const [rec, setRec] = useState("");

    const getTime = () => {
        const date = new Date();
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        return hours + ":" + minutes;
    }

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const reset = () => {
        setValue("");
        setRec("");
    }

    const handleInputValue = (val) => {
        if ((val >= 0 || val <= 9) && value !== "") {
            setValue("");
            setRec("")
            setRec(rec => rec + val)
        } else if ( (val === "%" || val === "/" || val === "*" || val === "-" || val === "+") && value !== "") {
            setValue("");
            setRec(value + val);
        } else if (val !== "=") {
            setRec(rec => rec + val)
        } else if (val === "=") {
            setValue(evaluate(rec));
            setRec(rec => rec + val)
        }
    }

    return (
        <div className="wrapper">
            <div className={`calc ${theme}`}>
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
                        <p className="first">{rec}</p>
                        <p className="second">{value}</p>
                    </div>
                </div>
                <div className="calc__buttons">
                    <Button changeTheme={changeTheme}><img src={theme === "light" ? light : dark} alt="theme"/></Button>
                    <Button handleInputValue={handleInputValue}>%</Button>
                    <Button handleInputValue={handleInputValue}>/</Button>
                    <Button handleInputValue={handleInputValue}>*</Button>
                    <Button handleInputValue={handleInputValue}>7</Button>
                    <Button handleInputValue={handleInputValue}>8</Button>
                    <Button handleInputValue={handleInputValue}>9</Button>
                    <Button handleInputValue={handleInputValue}>-</Button>
                    <Button handleInputValue={handleInputValue}>4</Button>
                    <Button handleInputValue={handleInputValue}>5</Button>
                    <Button handleInputValue={handleInputValue}>6</Button>
                    <Button handleInputValue={handleInputValue}>+</Button>
                    <Button handleInputValue={handleInputValue}>1</Button>
                    <Button handleInputValue={handleInputValue}>2</Button>
                    <Button handleInputValue={handleInputValue}>3</Button>
                    <Button reset={reset}>AC</Button>
                    <Button handleInputValue={handleInputValue}>0</Button>
                    <Button handleInputValue={handleInputValue}>.</Button>
                    <Button handleInputValue={handleInputValue}>=</Button>
                </div>
                <hr className="calc__indicator"/>
            </div>
        </div>
    );
}

export default App;
