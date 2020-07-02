import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <div className="pl-5 text-left">
            <div className="g-card-text">
                <h2 className="g-card-title">{props.title}</h2>
                <h4 className="g-card-sub-title">{props.subTitle}</h4>
                <p className="g-card-sub-title">{props.text}</p>
            </div>
            <animated.div className="g-card-info" style={style}>
                <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            </animated.div>
        </div>
    )
}

export default CardInfo;
