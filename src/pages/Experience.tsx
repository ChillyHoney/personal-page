import React from 'react';
import { Timeline } from 'antd';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';

const Experience: React.FC = () => {
  return (
    <Wrapper>
      <ExperienceTimeLine mode='left'>
        <Item label='2021/10 -> 2022/09'>
          <Title>PPM Open Projects</Title> Projekty były wdrażane w małym
          zespole deweloperskim opartym na SCRUMie. Odpowiedzialny byłem za
          implementacje rozwiązań w aplikacji mobilnej android/ iOS.
        </Item>
        <Item label='2018 -> obecnie'>
          <Title>Grafik komputerowy</Title> Jako freelancer tworze wizualizacje
          firmowe, projektuje zasoby w projektach niekomercyjnych, głównie z
          świata fantasy oraz przygotowywuje materiały do druku.
        </Item>
        <Item label='nwm'>
          <Title>Acrylex - kierownik drukarni</Title> Zarządzałem małym zespołem
          dwu osobowym w procesie druku wielkoformatowego. Pomagałem klientom
          ustalić najlepszy rodzaj materiału do ich aktualnych wymagań,
          przygotowywałem pliki do druku, zarządzałem stanem magazynowym i
          naprawiałem drukarki.
        </Item>
        <Item label='nwm'>
          <Title>Acrylex - Pracownik drukarni</Title> Moimi obowiązkami było
          przygotowywanie materiału do druku, konserwacja maszyny i pakowanie
          zlecenia dla klienta.
        </Item>
      </ExperienceTimeLine>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90vh;
  overflow: scroll;
  padding-bottom: 8px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: flex;
      width: 4px;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #e0e0e0;
  border-bottom: 2px solid #fff000;
`;

const ExperienceTimeLine = styled(Timeline)`
  color: #e0e0e0;
  padding-top: 48px;
  margin-left: -8px;

  @media ${device.mobileL} {
    padding-top: 8px;
  }
  @media ${device.tablet} {
    padding-right: 24vw;
  }
  @media ${device.laptop} {
    padding-right: 20vw;
  }
`;

const Item = styled(Timeline.Item)`
  font-size: 1rem;
`;
