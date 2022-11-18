import { Card } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';
import AboutMe from '../pages/AboutMe';
import Dashboard from '../pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Experience from '../pages/Experience';

const MainCard = () => {
  useEffect(() => {
    document.title = 'Mikolaj Wittbrodt';
  }, []);

  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </Wrapper>
  );
};

export default MainCard;

const Wrapper = styled(Card)`
  background-color: #001529;
  border-color: #001529;
  color: #727e89;
  border-radius: 8px;
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;

  @media ${device.tablet} {
    margin-top: 22px;
    margin-left: 24px;
    margin-right: 24px;
    height: 94%;
  }

  @media ${device.laptop} {
    left: 396px;
  }
`;
