import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import PersonalPage from '../images/personalpage.png';
import { device } from '../misc/styledBreakpoints';

const { Meta } = Card;

const ProjectsData = [
  {
    alt: 'personal-page-card',
    src: PersonalPage,
    title: 'Strona personalna',
    desc: `Moja pierwsza strona biznesowa dla mojej osoby pod linkiem:
    https://github.com/ChillyHoney/personal-page`,
  },
];

const Projects = () => (
  <Wrapper>
    {ProjectsData.map((data) => (
      <StyledCard hoverable cover={<img alt={data.alt} src={data.src} />}>
        <Meta
          title={data.title}
          description={<Description>{data.desc}</Description>}
        />
      </StyledCard>
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
  padding: 16px 0 16px 0;
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
