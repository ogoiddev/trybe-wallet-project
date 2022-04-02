import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

export const HeaderContainer = styled.div`
text-align: center;
  background-color: #183a37;
  height: 50%;
  display: flex;
  justify-content: space-around;
  
  span{
    font-size: 2rem;
    font-weight: 800;
    color: #f9f9f9;
    height: 50%;
    align-self: center;
  }
`;
