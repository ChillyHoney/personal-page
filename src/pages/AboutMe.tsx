import {
  FormOutlined,
  Html5Outlined,
  PartitionOutlined,
} from '@ant-design/icons';
import Progress from 'antd/lib/progress/progress';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';

const WebIcon = styled(Html5Outlined)`
  font-size: 6rem;
  margin-right: 16px;
  color: #fff000;
`;
const GraphicsIcon = styled(FormOutlined)`
  font-size: 6rem;
  margin-right: 16px;
  color: #fff000;
`;
const AutomaticaIcon = styled(PartitionOutlined)`
  font-size: 6rem;
  margin-right: 16px;
  color: #fff000;
`;

const Descriptions = [
  {
    subTitle: 'Aplikacje internetowe',
    desc: 'Tworze responsywne strony internetowe, głównie biznesowe w technologii javascriptowej z pomocą biblioteki React.JS.',
    icon: <WebIcon />,
  },
  {
    subTitle: 'Grafika komputerowa',
    desc: 'Jako amator samouk z około 6 letnim doświadczeniem, tworzę logotypy typu fantasy, kreuje wizerunek firmowy oraz maluje fikcyjne mapy.',
    icon: <GraphicsIcon />,
  },
  {
    subTitle: 'Automatyka',
    desc: 'To zainteresowanie zaczynam dopiero rozwijać i w planach jest stworzenie systemu do obsługi i monitorowania zdalnego szklarnii przydomowej.',
    icon: <AutomaticaIcon />,
  },
];

const Skills = [
  {
    skill: 'Javascript/ Typescript',
    percentage: 65,
  },
  {
    skill: 'React',
    percentage: 60,
  },
  {
    skill: 'React Native',
    percentage: 70,
  },
  {
    skill: 'Ruby',
    percentage: 35,
  },
  {
    skill: 'Ruby on Rails',
    percentage: 45,
  },
];

const AboutMe = () => {
  return (
    <Wrapper>
      <StyledSection>
        <Title>O mnie</Title>
        <Description>
          Jako programista i grafik komputerowy mam szereokie spectrum
          możliwości kreowania stylu i zwracania uwagi na szczegóły. Mam pół
          roczne doświadczenie jako backend rubyOnRails deweloper oraz pół
          roczne doświadczenie w frontendzie javascriptowych z pomocą frameworka
          React Native.
        </Description>
      </StyledSection>
      <StyledSection>
        <Title style={{ marginLeft: 0 }}>Czym się zajmuję?</Title>
        {Descriptions.map((item) => (
          <SecondSection key={item.subTitle}>
            <div style={{ display: 'flex' }}>
              {item.icon}
              <SubTitle>{item.subTitle}</SubTitle>
            </div>
            <Description>{item.desc}</Description>
          </SecondSection>
        ))}
      </StyledSection>
      <StyledSection>
        <Title style={{ marginLeft: 0 }}>Mój stack technologiczny</Title>

        {Skills.map((item) => (
          <ProgressBar key={item.skill}>
            <Description>{item.skill}</Description>
            <Progress
              percent={item.percentage}
              status='active'
              showInfo={false}
              strokeColor='#fff000'
            />
          </ProgressBar>
        ))}
      </StyledSection>
    </Wrapper>
  );
};

export default AboutMe;

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

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const ProgressBar = styled.div`
  color: #e0e0e0;
  padding-bottom: 16px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 5vw;
  margin-left: 9vw;
  color: #e0e0e0;
  border-bottom: 2px solid #fff000;

  ::first-letter {
    color: #fff000;
  }

  @media ${device.mobileS} {
    font-size: 10vw;
    margin-left: 14vw;
    margin-top: -1vh;
  }

  @media ${device.mobileL} {
    font-size: 6vw;
    margin-left: 8vw;
  }

  @media ${device.tablet} {
    font-size: 4vw;
    margin-left: 0;
  }

  @media ${device.laptop} {
    font-size: 3vw;
    margin-left: 0;
  }
`;

const SubTitle = styled.h2`
  color: #e0e0e0;
  font-size: 1.5em;
`;

const Description = styled.span`
  font-size: 1.2rem;
  padding-right: 8px;
`;

const SecondSection = styled.section`
  margin-bottom: 32px;
`;
