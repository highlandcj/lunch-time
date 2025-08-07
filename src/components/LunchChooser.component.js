import { useState } from 'react';
import './LunchChooser.component.css';

export default function LunchChooser() {
    let [choice, setChoice] = useState('???');
    let lunchSelection = choice;

    let lunchRoller = () => {
        let lunchOptions = ['Padmini\'s', 'H-Mart', 'Ledo\'s', 'The Garage', 'Shawn\'s House', 'Fifty-Fifty'];
        let randomNum = Math.floor(Math.random() * lunchOptions.length);

        setChoice ('Today you shall eat at ' + lunchOptions[randomNum] + '.');
    }

    return (
        <div className="choiceBody">
            <h2>Where shall you go for lunch today?</h2>
            <button className="choiceButton" onClick={lunchRoller}>-THE GODS WILL DECIDE-</button>
            <p>{choice}</p>
        </div>
    );
}
