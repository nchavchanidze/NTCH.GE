import React from 'react';
import CardInfo from './CardInfo';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'




function Card(props) {
    return (
        <div className="d-flex align-items-top g-card justify-content-between mb-5">
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} text={props.item.text} />
            <div className="project-card">
                <Zoom
                    overlayBgColorEnd="#212529" style={{ backgroundColor: '#212529' }}>
                    <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                </Zoom>
            </div>
        </div>
    )
}

export default Card;