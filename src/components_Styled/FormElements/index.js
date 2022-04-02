import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100%;
  height: ${({ name }) => (name === 'expenseContainer' ? '50%' : '100%')};
  
  `;

export const Form = styled.form`
  height: ${({ name }) => (name === 'loginForm' ? '200px' : '60%')};
  width: ${({ name }) => (name === 'loginForm' ? '330px' : '100%')};
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: ${({ name }) => (name === 'loginForm' ? 'column' : 'row')};
  `;

export const Label = styled.label`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  text-align: center;
  line-height: 20px;
  `;

export const Input = styled.input`
  border: 0.5px solid #FFEA81;
  padding: 5px;
  width: 100%;
  min-height: 43px;
  margin: ${({ name }) => ((name === 'email' || name === 'password') ? '10px' : '')};
  flex: 1;

  &:Focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 0.5px solid #FFEA81;
  min-height: 43px;
  padding: 5px;
`;

export const Select = styled.select`
height: 35px;
`;

export const Button = styled.button`
  align-self: ${({ name }) => (name === 'loginBtn' ? 'center' : 'bottom')};
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#FFEA81' : '#183a37')};
  color: ${({ disabled }) => (disabled ? '#ff101f' : '#f9f9f9')};
  font-weight: 800;
  font-size: 1rem;
  border-radius: 5px;
  margin: 5px;
  height: 43px;
  width: ${({ name }) => (name === 'loginBtn' ? '50%' : '100%')};
  padding: 5px;

  &:hover {
    border-radius: 9px;

  &:active {
    transform: translate(1px, 1px);
  }
  }
`;
