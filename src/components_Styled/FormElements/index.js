import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  height: ${({ name }) => (name === 'loginForm' ? '200px' : '50px')};
  width: ${({ name }) => (name === 'loginForm' ? '400px' : '100%')};
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ name }) => (name === 'loginForm' ? 'column' : 'row')};
  align-items: center;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  border: 0.5px solid #FFEA81;
  margin: 5px;
  padding: 5px;
  width: 100%;

  &:Focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 0.5px solid #FFEA81;
`;

export const Select = styled.select`
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#FFEA81' : '#47e684')};
  color: ${({ disabled }) => (disabled ? '#ff101f' : '#f9f9f9')};
  font-weight: 800;
  font-size: 1.3rem;
  border-radius: 5px;
  margin: 5px;
  width: ${({ name }) => (name === 'loginBtn' ? '50%' : '100%')};

  &:hover {
    border-radius: 15px;

  &:active {
    transform: translate(1px, 1px);
  }  
  }
`;
