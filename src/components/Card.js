import { useState } from 'react';
import './Card.scss';
import Infos from './Infos';

export default function Card({number}) {
    let randomImage = "https://picsum.photos/300?random=" + number;
    const [inputValue, setInputValue] = useState("Title " + (number + 1))

    return (
        <div className="card-container">
            <img src={randomImage}></img>
            <input type="text" value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
            <Infos />
        </div>
    )
}