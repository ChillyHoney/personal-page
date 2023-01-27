import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import PersonalPage from '../images/personalpage.png';
import PictureMakerAPI from '../images/picturemakerAPI.jpg';
import { device } from '../misc/styledBreakpoints';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProjectsData = [
  {
    alt: 'personal-page-card',
    src: PersonalPage,
    title: 'Strona personalna',
    desc: `Moja pierwsza strona personalna wykonana od A do Z z wykorzystaniem react, styled-components i ant design.
    `,
    link: 'https://github.com/ChillyHoney/personal-page',
  },
  {
    alt: 'ruby-on-rails',
    src: PictureMakerAPI,
    title: 'Picture Maker API',
    desc: `API do projektu stażowego Picture Maker służacy do rejestracji i logowania na bazie postgreSQL z funckajmi CRUD oraz dodatkowmi możliwosciami dodawania do ulubionych.`,
    link: 'https://github.com/ChillyHoney/Picture-Maker-API',
  },
];

const Projects = () => (
  <Wrapper>
    {ProjectsData.map((data) => (
      <a href={data.link} key={data.title}>
        <StyledCard hoverable cover={<img alt={data.alt} src={data.src} />}>
          <Meta
            title={data.title}
            description={<Description>{data.desc}</Description>}
          />
        </StyledCard>
      </a>
    ))}
  </Wrapper>
);

export default Projects;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  padding-bottom: 32px;
  height: 90vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    overflow: scroll;
    overflow-x: hidden;
    margin: 0 16px 0 16px;
    ::-webkit-scrollbar {
      display: flex;
      width: 4px;
    }
  }
`;

const StyledCard = styled(Card)`
  padding: 8px 8px 8px 8px;
  margin: 0 0 24px;
  background-color: #001529;
  border: 3px solid #fff000;
  border-radius: 3px;

  @media ${device.tablet} {
    display: flex;
    margin-right: 32px;
  }
`;

const Description = styled.span`
  color: #fff;
`;
