import styled from 'styled-components';
import dupa from '../images/workInProgress.png';
import { device } from '../misc/styledBreakpoints';

const Blog = () => {
  return <WorkInProgress src={dupa} alt='Serwis blogowy w trakcie prac...' />;
};

export default Blog;

const WorkInProgress = styled.img`
  width: 100%;

  @media ${device.tablet} {
    margin-left: 13vw;
    width: 70%;
  }

  @media ${device.laptop} {
    margin-left: 8vw;
  }
`;
