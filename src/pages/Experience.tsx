import React from 'react';
import { Timeline } from 'antd';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';

const ExperienceData = [
  {
    period: '2021/10 -> 2022/09',
    jobTitle: 'PPM Open Projects',
    desc: 'Projekty były wdrażane w małym zespole deweloperskim opartym na SCRUMie. Odpowiedzialny byłem za implementacje rozwiązań w aplikacji mobilnej android/ iOS.',
  },
  {
    period: '2018 -> obecnie',
    jobTitle: 'Grafik komputerowy',
    desc: 'Jako freelancer tworze wizualizacje firmowe, projektuje zasoby w projektach niekomercyjnych, głównie z świata fantasy oraz przygotowywuje materiały do druku.',
  },
  {
    period: '2019/08 -> 2021/10',
    jobTitle: 'Acrylex - kierownik drukarni',
    desc: 'Zarządzałem małym zespołem dwu osobowym w procesie druku wielkoformatowego. Pomagałem klientom ustalić najlepszy rodzaj materiału do ich aktualnych wymagań, przygotowywałem pliki do druku, zarządzałem stanem magazynowym i naprawiałem drukarki.',
  },
  {
    period: '2019/02 -> 2019/08',
    jobTitle: 'Acrylex - operator drukarni UV',
    desc: 'Moimi obowiązkami było przygotowywanie materiału do druku, konserwacja maszyny i pakowanie zlecenia dla klienta.',
  },
];

const Experience = () => {
  return (
    <Wrapper>
      <ExperienceTimeLine mode='left'>
        {ExperienceData.map((item) => (
          <Item key={item.jobTitle} label={item.period}>
            <Title>{item.jobTitle}</Title> {item.desc}
          </Item>
        ))}
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
