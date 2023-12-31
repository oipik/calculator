import './app.scss';

import signal from "../images/signal.png";
import wifi from "../images/wifi.png";
import battery from "../images/battery.png";

function App() {

    const getTime = () => {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    return (
        <div className="wrapper">
            <div className="calc">
                <div className="calc__window">
                    <div className="calc__sidebar">
                        <p className="calc__bar">{getTime()}</p>
                        <div className="calc__icons">
                            <img src={signal} alt="signal" />
                            <img src={wifi} alt="wifi" />
                            <img src={battery} alt="battery" />
                        </div>
                    </div>
                    <div className="calc__values">
                        <p className="first">Первое</p>
                        <p className="second">Второе</p>
                    </div>
                </div>
                <div className="calc__buttons">
                    
                </div>
            </div>
        </div>
    );
}

export default App;
