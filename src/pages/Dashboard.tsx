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
    <>
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
            <div>
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
    </>
  );
};

const LevelExperiencLabel = styled.span`
  font-size: 6vw;
  font-weight: 600;
  color: #fff000;

  @media ${device.tablet} {
    font-size: 4vw;
  }
`;

const SubExperienceLabel = styled.p`
  font-size: 5vw;
  font-weight: 300;
  color: #727e89;

  @media ${device.tablet} {
    font-size: 3vw;
  }
`;

const CarouselWrapper = styled.div`
  display: 'flex';
  padding: 24px;
  width: 100%;
  height: 400px;
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
