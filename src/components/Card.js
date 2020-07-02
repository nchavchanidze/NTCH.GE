import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {
    return( 
        <div className="d-flex align-items-top g-card " onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} text={props.item.text} />
        </div>
    )
}

export default Card;