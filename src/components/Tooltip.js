import { useEffect, useRef, useState } from 'react';
import './Tooltip.scss';

/**
 * The tooltip is in absolute position, his parent must
 * be in relative position so it displays on top of it
 * @param {text} String to display on the tooltip
 * @returns
 */
export default function Tooltip({text}) {
    const inputRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(30);
    let arrowHeight = 5;
    const style = {
        top: -height - arrowHeight
    }

    useEffect(() => {
        const height = inputRef.current.offsetHeight;
        setHeight(height);
     }, [inputRef]);

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
        <div className="tooltip" ref={inputRef} style={visible ? {...style, opacity: 1} : {...style, opacity: 0}}>
            <span>{text}</span>
        </div>
    )
}