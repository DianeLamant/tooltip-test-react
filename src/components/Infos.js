import { useState } from 'react';
import './Infos.scss';

export default function Infos({text}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="infos">
            {open ?
            <p>Infos</p>
            : ''}
            <img className={open ? 'button active' : 'button'} src="/down-arrow.png" onClick={() => setOpen(!open)}></img>
        </div>
    )
}