import { useState } from 'react';
import './Infos.scss';
import Tooltip from './Tooltip';

export default function Infos() {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div className="infos">
            {open ?
            <p>Informations</p>
            : ''}
            <div className="button-container">
                <img
                    className={open ? 'button active' : 'button'}
                    src="/down-arrow.png"
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                ></img>
                {hover ?
                    <Tooltip text={open ? "Close informations" : "See informations"} /> : null
                }
            </div>
        </div>
    )
}