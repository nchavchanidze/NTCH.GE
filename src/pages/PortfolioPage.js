import React from 'react';
import Carousel from '../components/Carousel';
import PortfolioHero from '../components/Porfolio-Hero';

class Portfolio extends React.Component {
    render() {
        return(
            <div>
                <PortfolioHero />
                <Carousel />
            </div>
            )
    }
}

export default Portfolio;