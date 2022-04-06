import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  `;

export const HeaderContainer = styled.div`
  text-align: center;
  background-color: #183a37;
  height: 50%;
  display: flex;
  justify-content: space-around;
  
  span{
    font-size: 1.5rem;
    font-weight: 800;
    color: #f9f9f9;
    height: 100%;
    line-height: 100px;
    align-self: center;

  .logo {
    width: 100px;
  }  
  }
`;
