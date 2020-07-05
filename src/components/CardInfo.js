import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faLink)

const projectIcon = {
    color: '#ff105e',
    fontSize: 15,
    transition: '.3s'
}

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <div className="text-left g-card-info-text">
            <div className="g-card-text">
                <h1 className="g-card-title">{props.title}</h1>
                <h4 className="g-card-sub-title">{props.subTitle}</h4>
                <p className="g-card-sub-title">{props.text}</p>
            </div>
            <animated.div className="g-card-info m-0" style={style}>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="p-0 m-0"><FontAwesomeIcon className="pr-2" style={projectIcon} icon={['fas', 'link']} />{props.link}</a>
            </animated.div>
        </div>
    )
}

export default CardInfo;
