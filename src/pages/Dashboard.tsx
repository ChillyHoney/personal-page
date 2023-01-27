import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Carousel, Button } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';

const Dashboard = () => {
  const ref = useRef<CarouselRef>(null);

  const WhatImDoing = [
    {
      levelOfJob: 'Zawodowo jestem',
      detailOfJob: 'początkującym programistą frontend',
    },
    { levelOfJob: 'Amatorsko zajmuje się', detailOfJob: 'grafiką komputerową' },
    {
      levelOfJob: 'W czasie wolnym lubię',
      detailOfJob: 'elektronikę, automatyzacje, mechanike',
    },
    { levelOfJob: 'Z pasją i sercem', detailOfJob: 'jeżdzę motocyklami' },
  ];

  return (
    <Wrapper>
      <CarouselWrapper>
        <Carousel
          ref={ref}
          verticalSwiping
          autoplay
          draggable
          dots={false}
          dotPosition='right'
        >
          {WhatImDoing.map((job) => (
            <div key={job.levelOfJob}>
              <LevelExperiencLabel>{job.levelOfJob}</LevelExperiencLabel>
              <SubExperienceLabel>{job.detailOfJob}</SubExperienceLabel>
            </div>
          ))}
        </Carousel>
      </CarouselWrapper>
      <div>
        <SocialButton
          onClick={() => ref.current?.next()}
          size='large'
          shape='circle'
          ghost={true}
          type='primary'
        >
          <LeftIcon />
        </SocialButton>
        <SocialButton
          onClick={() => ref.current?.prev()}
          size='large'
          shape='circle'
          ghost={true}
          type='primary'
        >
          <RightIcon />
        </SocialButton>
      </div>
    </Wrapper>
  );
};

const LevelExperiencLabel = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
  color: #fff000;

  @media ${device.pagers} {
    font-size: 6vw;
  }
  @media ${device.mobileS} {
    font-size: 6vw;
  }
  @media ${device.tablet} {
    font-size: 6vw;
  }
  @media ${device.laptop} {
    font-size: 4vw;
  }
`;

const SubExperienceLabel = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: #727e89;

  @media ${device.pagers} {
    font-size: 5vw;
  }
  @media ${device.mobileS} {
    font-size: 5vw;
  }
  @media ${device.tablet} {
    font-size: 4vw;
  }
  @media ${device.laptop} {
    font-size: 3vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12vh;
`;

const CarouselWrapper = styled.div`
  text-align: center;
  padding: 0 24px 0 24px;
  width: 130%;
  height: 40vh;
`;

const LeftIcon = styled(UpOutlined)`
  font-size: 24px;
`;
const RightIcon = styled(DownOutlined)`
  font-size: 24px;
`;

const SocialButton = styled(Button)`
  margin: 4px;
  border-width: 2px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;

export default Dashboard;
