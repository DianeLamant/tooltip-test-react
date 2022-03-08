import { useEffect, useState } from 'react';
import './Tooltip.scss';

/**
 * The tooltip is in absolute position, his parent must
 * be in relative position so it displays on top of it
 * @param {text} String to display on the tooltip
 * @returns
 */
export default function Tooltip({text}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Add an animation when component did mount and
        // hide the component after 2000ms
        setVisible(true);
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2000)

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <div className="tooltip" style={visible ? {opacity: 1} : {opacity: 0}}>
            <span>{text}</span>
        </div>
    )
}