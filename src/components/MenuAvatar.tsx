import { Avatar } from 'antd';
import React from 'react';
import styled from 'styled-components';
import MyAvatar from '../images/avatar.jpeg';

const StyledAvatar = styled(Avatar)`
  border-width: 8px;
  border-style: inset;
  border-color: #fff000;
`;

const MenuAvatar: React.FC = () => (
  <div>
    <StyledAvatar src={MyAvatar} size={256} alt='My photo!' />
  </div>
);

export default MenuAvatar;
