import React from 'react';
import CardInfo from './CardInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faLink)

const projectIcon = {
    color: '#ff105e',
    fontSize: 20,
    transition: '.3s'
}

function Card(props) {
    return (
        <div className="d-flex align-items-top g-card mb-5 flex-wrap">
            <div className="position-relative project-card">
                
                <a href={props.item.link}  className="project-link p-0 m-0" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={projectIcon} icon={['fas', 'link']} link={props.item.link} />
                    </a>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            </div>
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} text={props.item.text} />
        </div>
    )
}

export default Card;