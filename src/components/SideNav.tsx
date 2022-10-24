import {
  GithubOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  MailOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SideBox from './SideBox';

type MenuItem = Required<MenuProps>['items'][number];

const MenuUnfoldIcon = styled(MenuUnfoldOutlined)`
  color: #2b2b2b;
  font-size: 18px;
`;
const MenuFoldIcon = styled(MenuFoldOutlined)`
  color: #2b2b2b;
  font-size: 18px;
`;

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
  getItem('Pulpit', 'Dashboard', <HomeOutlined />),
  getItem('O mnie', 'About Me', <UserOutlined />),
  getItem('Projekty', 'Projects', <GithubOutlined />),
  getItem('Blog', 'Blog', <SolutionOutlined />),
  getItem('Kontakt', 'Contact', <MailOutlined />),
];

const SideNav: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref.current != null) return setWidth(ref.current.offsetWidth);
  }, []);

  console.log(width);

  return (
    <Wrapper>
      <MenuWrapper active={active} ref={ref}>
        <AntDMenu
          defaultSelectedKeys={['Dashboard']}
          mode='inline'
          theme='dark'
          items={items}
        ></AntDMenu>
        <SideBox />
      </MenuWrapper>
      <MenuButton
        size='large'
        shape='circle'
        type='primary'
        onClick={() => setActive(!active)}
      >
        {active ? <MenuUnfoldIcon /> : <MenuFoldIcon />}
      </MenuButton>
    </Wrapper>
  );
};

export default SideNav;

const MenuWrapper = styled('div')<{ active: boolean }>`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 600ms;
  transform: ${(props) =>
    props.active ? 'translate3d(0vw, 0, 0)' : 'translate3d(-100vw, 0, 0)'};
`;

const Wrapper = styled.div`
  background-color: pink;
  width: 6000px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const AntDMenu = styled(Menu)`
  padding-top: 68px;
`;

const MenuButton = styled(Button)`
  margin-top: 16px;
  margin-left: 16px;
  border: 1px;
  position: fixed;
  left: 0;
  top: 0;
  :hover {
    transform: scale(1.2, 1.2);
  }
`;
