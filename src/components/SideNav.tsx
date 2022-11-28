import {
  GithubOutlined,
  UserOutlined,
  HomeOutlined,
  MailOutlined,
  SolutionOutlined,
  MenuOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import SideBox from './SideBox';
import { device } from '../misc/styledBreakpoints';
import { Link, useLocation } from 'react-router-dom';
import useWindowDimensions from '../misc/useWindowDimensions';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem(
    <Link style={{ color: '#828282' }} to='/'>
      Pulpit
    </Link>,
    '/',
    <HomeOutlined />
  ),
  getItem(
    <Link style={{ color: '#828282' }} to='/about'>
      O mnie
    </Link>,
    '/about',
    <UserOutlined />
  ),
  getItem(
    <Link style={{ color: '#828282' }} to='/experience'>
      Doświadczenie
    </Link>,
    '/experience',
    <FileDoneOutlined />
  ),
  getItem(
    <Link style={{ color: '#828282' }} to='/projects'>
      Projekty
    </Link>,
    '/projects',
    <GithubOutlined />
  ),
  getItem(
    <Link style={{ color: '#828282' }} to='/blog'>
      Blog
    </Link>,
    '/blog',
    <SolutionOutlined />
  ),
  getItem(
    <Link style={{ color: '#828282' }} to='/contact'>
      Kontakt
    </Link>,
    '/contact',
    <MailOutlined />
  ),
];

const SideNav = () => {
  const [active, setActive] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const handleMenuItemClick = () => {
    if (width < 1024) setActive(!active);
  };

  const location = useLocation();

  return (
    <Wrapper>
      <MenuWrapper active={active}>
        <AntDMenu
          defaultSelectedKeys={[location.pathname]}
          onClick={handleMenuItemClick}
          theme='dark'
          items={items}
        />
        <SideBox />
      </MenuWrapper>
      <MenuButton
        size='large'
        shape='circle'
        type='primary'
        onClick={() => setActive(!active)}
      >
        <MenuIcon />
      </MenuButton>
    </Wrapper>
  );
};

export default SideNav;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
`;

const MenuIcon = styled(MenuOutlined)`
  color: #2b2b2b;
  font-size: 18px;
`;

const MenuWrapper = styled('div')<{ active: boolean }>`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: transform 600ms;
  transform: ${(props) =>
    props.active ? 'translate3d(0vw, 0, 0)' : 'translate3d(-200vw, 0, 0)'};

  @media ${device.tablet} {
    width: 350px;
    transform: ${(props) =>
      props.active ? 'translate3d(-120vw, 0, 0)' : 'translate3d(0vw, 0, 0)'};
  }

  @media ${device.laptop} {
    width: 350px;
    transform: ${(props) =>
      props.active ? 'translate3d(-120vw, 0, 0)' : 'translate3d(0vw, 0, 0)'};
  }
`;

const AntDMenu = styled(Menu)`
  padding-top: 68px;
`;

const MenuButton = styled(Button)`
  margin-top: 16px;
  margin-left: 16px;
  position: fixed;
  left: 0;
  top: 0;
  :hover {
    transform: scale(1.2, 1.2);
  }

  @media ${device.laptop} {
    visibility: hidden;
  }
`;
