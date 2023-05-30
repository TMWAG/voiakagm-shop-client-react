import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  margin: 1vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    color: black;
    margin: 0 0.5vw;
    text-decoration: none;
  }
  > a.active {
    color: #6b4fbd;
  }
`;
