import { InstagramOutlined, LinkedinFilled } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';
import MenuAvatar from './MenuAvatar';

const SideBox: React.FC = () => {
  const Buttons = [
    {
      icon: <InstagramIcon />,
      link: 'https://www.instagram.com/chilly_honey_/',
    },
    {
      icon: <LinkedinIcon />,
      link: 'https://www.linkedin.com/in/miko%C5%82aj-wittbrodt-admin1234qdsa/',
    },
  ];

  return (
    <StyledDiv>
      <MenuAvatar size={202} />
      <FullName>Mikołaj Wittbrodt</FullName>
      <Title>Witaj na mojej stronie!</Title>
      <ButtonWrapper>
        {Buttons.map((button) => (
          <SocialButton
            key={button.link}
            href={button.link}
            size='large'
            shape='circle'
            ghost={true}
            type='primary'
          >
            {button.icon}
          </SocialButton>
        ))}
      </ButtonWrapper>
      <ContactButton shape='round' type='primary' ghost={true}>
        Skontaktuj się ze mną!
      </ContactButton>
      <Footer>© 2022 All rights reserved.</Footer>
    </StyledDiv>
  );
};

export default SideBox;

const StyledDiv = styled.div`
  background-color: #001529;
  flex-direction: column;
  padding: 32px 18px 32px 18px;
  box-shadow: 4px 0 5px -4px #fff000;
`;

const ButtonWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ContactButton = styled(Button)`
  padding-top: 8px;
  padding-bottom: 32px;
  margin: 16px;
  border-width: 3px;
  font-weight: 600;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const FullName = styled.h4`
  color: #fff000;
  margin-top: 16px;
`;
const Title = styled.h5`
  color: #727e89;
  margin-top: -16px;
  margin-bottom: 12px;
`;
const Footer = styled.span`
  color: #727e89;
  display: flex;
  position: fixed;
  flex-direction: row;
  bottom: 0;
  margin-bottom: 16px;
  font-size: 12px;
  width: 100%;
`;
const SocialButton = styled(Button)`
  margin: 4px;
  border-width: 3px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
const InstagramIcon = styled(InstagramOutlined)`
  font-size: 24px;
  margin-top: 5px;
`;
const LinkedinIcon = styled(LinkedinFilled)`
  margin-top: 5px;
  font-size: 24px;
`;
