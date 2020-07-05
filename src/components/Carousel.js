import React from 'react';
import Card from './Card';
import Infinity from '../assets/images/Portfolio/infinity.png'
import Standout from '../assets/images/Portfolio/standout.png'
import Studio from '../assets/images/Portfolio/studio.png'
import Apollo from '../assets/images/Portfolio/apollo.png'
import Wooster from '../assets/images/Portfolio/wooster.png'

import Container from 'react-bootstrap/Container';

// const testStyle = {
//     overflowX: 'scroll',
//     width: '75vw',
//     flexWrap:'nowrap',
//     padding: 10
// }
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Infinity',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Infinity,
                    link: 'https://nchavchanidze.github.io/Infinity/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Standout',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Standout,
                    link: 'https://nchavchanidze.github.io/Standout/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Studio',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Studio,
                    link: 'https://nchavchanidze.github.io/Studio/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Apollo',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Apollo,
                    link: 'https://nchavchanidze.github.io/Apolo/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Wooster',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Wooster,
                    link: 'https://nchavchanidze.github.io/Wooster/',
                    selected: false
                },
            ]
        }
    }    


    // handleCardClick = (id, card) => {
    //     console.log(id)
    //     let items = [...this.state.items];

    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item => {
    //         if(item.id !== id) {
    //             item.selected = false;
    //         }
    //     });

    //     this.setState({
    //         items
    //     });
    // }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item}  key={item.id} />
        })
    }


    render() {
        return(
            <Container className="animate__animated animate__fadeInUp">
                    {this.makeItems(this.state.items)}
            </Container>
        );
    }

}

export default Carousel;