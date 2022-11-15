import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';
import AboutMe from '../pages/AboutMe';
import Dashboard from '../pages/Dashboard';
import { Route, Routes } from 'react-router-dom';

const MainCard = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
    </Wrapper>
  );
};

export default MainCard;

const Wrapper = styled(Card)`
  background-color: #001529;
  border-color: #001529;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #727e89;
  border-radius: 8px;
  margin-left: 0;
  margin-right: 0;
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;

  @media ${device.tablet} {
    margin-left: 24px;
    margin-right: 24px;
    height: 94%;
  }

  @media ${device.laptop} {
    left: 364px;
  }
`;
