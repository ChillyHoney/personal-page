import {
  FormOutlined,
  Html5Outlined,
  PartitionOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';

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
        <SecondSection>
          <WebIcon />
          <div>
            <SubTitle>Aplikacje internetowe</SubTitle>
            <Description>
              Tworze responsywne strony internetowe, głównie biznesowe w
              technologii javascriptowej z pomocą biblioteki React.JS.
            </Description>
          </div>
        </SecondSection>
        <SecondSection>
          <GraphicsIcon />
          <div>
            <SubTitle>Grafika komputerowa</SubTitle>
            <Description>
              Jako amator samouk z około 6 letnim doświadczeniem, tworzę
              logotypy typu fantasy, kreuje wizerunek firmowy oraz maluje
              fikcyjne mapy.
            </Description>
          </div>
        </SecondSection>
        <SecondSection>
          <AutomaticaIcon />
          <div>
            <SubTitle>Automatyka</SubTitle>
            <Description>
              To zainteresowanie zaczynam dopiero rozwijać i w planach jest
              stworzenie systemu do obsługi i monitorowania zdalnego szklarnii
              przydomowej.
            </Description>
          </div>
        </SecondSection>
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
  display: flex;
  margin-bottom: 32px;
`;

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
