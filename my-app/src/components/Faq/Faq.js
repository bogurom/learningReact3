import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

// const {title, image} = this.props;
// <Hero titleText={title} imageSrc={image}/>

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} imageSrc={settings.faq.image}/>
    <p>{settings.faq.text}</p>
  </Container>
);

export default Faq;
