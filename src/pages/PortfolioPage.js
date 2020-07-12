import React from 'react';
import Carousel from '../components/Carousel';
import PortfolioHero from '../components/Porfolio-Hero';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="animate__animated animate__fadeInUp">
                <PortfolioHero />
                <Carousel />
            </div>
            )
    }
}

export default Portfolio;