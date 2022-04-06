import styled from 'styled-components';
import { RiDeleteBin2Line, RiEditLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: ${({ name }) => (name === 'expenseContainer' ? 'center' : '')};
  margin-top: ${({ name }) => (name === 'expenseContainer' ? '' : '60px')};
  width: 100%;
  height: 100%;
  `;

export const Form = styled.form`
  height: ${({ name }) => (name === 'loginForm' ? '200px' : '60%')};
  box-shadow: ${({ name }) => (name === 'loginForm'
    ? '0 0 15px rgba(0, 0, 0, 0.3)' : '')};
  border-radius: ${({ name }) => (name === 'loginForm' ? '7px' : '')};
  padding: ${({ name }) => (name === 'loginForm' ? '13px' : '')};
  width: ${({ name }) => (name === 'loginForm' ? '330px' : '94%')};
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
  border: 2px solid #04aa6d;
  padding: 5px;
  width: 100%;
  min-height: 43px;
  flex: 1;
  border-radius: ${({ className }) => (className === 'input-login' ? '' : '3px')};

  &:Focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 2px solid #04aa6d;
  border-radius: 3px;
  min-height: 43px;
  resize: horizontal;
  max-width: 800px;
  min-width: 350px;
  padding: 5px;

  &:Focus {
    width: 600px;
    transition: 0.1s; 
  }

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
  width: ${({ name }) => (name === 'loginBtn' ? '100%' : '200px')};
  padding: ${({ name }) => (name === 'loginBtn' ? '' : '9px')};
  margin-left: ${({ name }) => (name === 'loginBtn' ? '' : '13px')};
  transition: 0.5s;

  &:hover {
    font-size: ${({ name }) => (name === 'loginBtn' ? '150%' : '')};
    color: ${({ name }) => (name === 'loginBtn' ? '' : 'yellow')};
    transition: 0.5s;

  &:active {
    transform: translate(1px, 1px);
  }
  }
`;

export const EditBtn = styled(RiEditLine)`
  background-color: #E2CA29;
  color: #111;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  padding: 7px;
  font-size: 20px;

  &:hover {
    filter: brightness(1.3);
    border: 0.5px solid #111;
  }

  @media (max-width: 1024px) {
      background-color: transparent;
      color: #111;
    }
`;

export const DeletBtn = styled(RiDeleteBin2Line)`
  background-color: #B10000;
  color: #fff;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  padding: 7px;
  font-size: 20px;

  &:hover {
    filter: brightness(1.3);
  }

  @media (max-width: 1024px) {
      background-color: transparent;
      color: #111;
    }
`;
