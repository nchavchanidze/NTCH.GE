import React from 'react';
import Card from './Card';
import Infinity from '../assets/images/Portfolio/infinity.png'
import evverest from '../assets/images/evverest.jpg';
import youtube from '../assets/images/youtube.jpg';
import jima from '../assets/images/jima.jpg'
import gela from '../assets/images/gela.jpg'
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
                    text: "ssssssss",
                    imgSrc: Infinity,
                    link: 'https://nchavchanidze.github.io/Infinity/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Nick TCH',
                    subTitle: 'Like For Devs',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCouTG1OOoqUqEihul921uOw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'The Book For Devs',
                    imgSrc: evverest,
                    link: 'https://github.com',
                    selected: false
                },{
                    id: 3,
                    title: 'Jima',
                    subTitle: 'The Book For Devs',
                    imgSrc: jima,
                    link: 'https://github.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Gela',
                    subTitle: 'The Book For Devs',
                    imgSrc: gela,
                    link: 'https://github.com',
                    selected: false
                },
            ]
        }
    }    


    handleCardClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container>
                    {this.makeItems(this.state.items)}
            </Container>
        );
    }

}

export default Carousel;