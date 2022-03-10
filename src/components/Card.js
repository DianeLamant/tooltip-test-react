import { useState } from 'react';
import './Card.scss';
import Infos from './Infos';
import Tooltip from './Tooltip';

export default function Card({number}) {
    let randomImage = "https://picsum.photos/300?random=" + number;
    const [inputValue, setInputValue] = useState("Title " + (number + 1));
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className="card-container">
            <img src={randomImage}></img>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => {setInputValue(event.target.value)}}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                ></input>
                {inputFocus ?
                    <Tooltip text="You can change the title here." /> : null
                }
            </div>
            <Infos />
        </div>
    )
}