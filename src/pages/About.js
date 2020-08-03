import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
function About(props){
    return(
       <div>
            <Hero title={props.title} />
            <Content>   
                <p>My name is Maja Zhivkovikj and I am Front End Web Developer with some experience in Bootstrap, Angular JS, Angular and React.</p>
                <p>I am constantly learning new things and my plan is to learn Back End techologies as .Net, Java Spring etc.</p>
                <p>I am flexible, reliable and hardworking person.</p>
                <p>You can see my projects at <a href="https://github.com/Zhivkovikj">Maja's Projects</a>.</p>
                
            </Content>
       </div>
    );
}
export default About;