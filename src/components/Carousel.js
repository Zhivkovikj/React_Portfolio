import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import boot from '../assets/boot.jpg';
import m from '../assets/m.png';
import git from '../assets/git.png';
import angular from '../assets/angular.png';
import react from '../assets/react.png';



class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bootstrap',
                    subTitle: 'Learn Bootstrap!',
                    imgSrc: boot,
                    link: 'https://getbootstrap.com/',
                    selected: false
                },
                 {
                    id: 1,
                    title: 'Maja Zhivkovikj',
                    subTitle: 'Bootstrap Portfolio',
                    imgSrc: m,
                    link: 'https://github.com/Zhivkovikj/Bootstrap-Portfolio',
                    selected: false
                },
                 {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A social network for Developers',
                    imgSrc: git,
                    link: 'https://github.com/Zhivkovikj',
                    selected: false
                },
                 {
                    id: 3,
                    title: 'Angular',
                    subTitle: 'Learn Angular!',
                    imgSrc: angular,
                    link: 'https://angular.io/',
                    selected: false
                },
                 {
                    id: 4,
                    title: 'Maja Zhivkovikj',
                    subTitle: 'Angular Photo Album',
                    imgSrc: m,
                    link: 'https://github.com/Zhivkovikj/microinstagram',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Github',
                    subTitle: 'A social network for Developers',
                    imgSrc: git,
                    link: 'https://github.com/Zhivkovikj',
                    selected: false
                },
                {
                    id: 6,
                    title: 'React',
                    subTitle: 'Learn React!',
                    imgSrc: react,
                    link: 'https://reactjs.org/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Maja Zhivkovikj',
                    subTitle: 'React Project',
                    imgSrc: m,
                    link: 'https://github.com/Zhivkovikj',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Github',
                    subTitle: 'A social network for Developers',
                    imgSrc: git,
                    link: 'https://github.com/Zhivkovikj',
                    selected: false
                },
             
            ]
        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
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
        });
    };
    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>    
            </Container>    
        );
    }

}
export default Carousel;