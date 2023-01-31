import HeaderWithAnimation from '@components/HeaderWithAnimation';
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Animation from '@components/Animation';
import TeamItem from '@components/TeamItem';
import Particles from '@components/Particles';
import teamData from './team';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './team.scss';

const settings = {
  dots: true,
  swipe: true,
  infinite: true,
  speed: 500,
  slidesToShow: teamData.length,
  slidesToScroll: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 10000,
  loop: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4 < teamData.length ? 4 : teamData.length
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3< teamData.length ? 3 : teamData.length 
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const TeamSection = () => {
  return (
    <section id='team'>
      <Particles id='team-particles' />
      <Container className='team-header'>
        <Col md={12}>
          <HeaderWithAnimation text="Team Members" />
        </Col>
      </Container>
      <div className='team-container'>
        <Container>
          <Animation animation='fadeIn'>
            <Slider {...settings}>
              {teamData.map(member => <TeamItem key={member.name} member={member} />)}
            </Slider>
          </Animation>
        </Container>
      </div>
    </section>
  )
}

export default TeamSection;
