import React from 'react';
import Card from './Card';
import DiscordBot from '../assets/images/Portfolio/discordbot.jpg'
import WeatherApp from '../assets/images/Portfolio/weatherapp.jpg'
import RecipeApp from '../assets/images/Portfolio/recipeapp.jpg'
import SnakeGame from '../assets/images/Portfolio/snakegame.jpg'
import TodoApp from '../assets/images/Portfolio/todoapp.png'
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
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Discord Bot',
                    subTitle: 'Discord Bot with Custom Commands',
                    text: "Discord.js / Node.js",
                    imgSrc: DiscordBot,
                    link: 'https://github.com/nchavchanidze/Discord-Bot',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather App',
                    subTitle: 'Weather React App',
                    text: "React.js",
                    imgSrc: WeatherApp,
                    link: 'https://github.com/nchavchanidze/Weather-App',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Recipe App',
                    subTitle: 'Recipe Search App',
                    text: "React.js",
                    imgSrc: RecipeApp,
                    link: 'https://github.com/nchavchanidze/Recipe-Search-App',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Todo App',
                    subTitle: 'Todo React app',
                    text: "React.js",
                    imgSrc: TodoApp,
                    link: 'https://github.com/nchavchanidze/Todo-app',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Snake',
                    subTitle: 'Snake Game',
                    text: "React.js",
                    imgSrc: SnakeGame,
                    link: 'https://nchavchanidze.github.io/Snake-game/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Infinity',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Infinity,
                    link: 'https://nchavchanidze.github.io/Infinity/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Standout',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Standout,
                    link: 'https://nchavchanidze.github.io/Standout/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Studio',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Studio,
                    link: 'https://nchavchanidze.github.io/Studio/',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Apollo',
                    subTitle: 'Portfolio Website',
                    text: "HTML / CSS / Javascript / Bootstrap",
                    imgSrc: Apollo,
                    link: 'https://nchavchanidze.github.io/Apolo/',
                    selected: false
                },
                {
                    id: 9,
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
            return <Card item={item} key={item.id} />
        })
    }


    render() {
        return (
            <Container className="animate__animated animate__fadeInUp">
                {this.makeItems(this.state.items)}
            </Container>
        );
    }

}

export default Carousel;