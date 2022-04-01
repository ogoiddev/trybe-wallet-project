import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Label = styled.label`
  border: 1px solid red;
`;

export const Input = styled.input`
  border: 0.5px solid red;

  &:Focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 0.5px solid red;
`;

export const Select = styled.select`
  border: 0.5px solid blue;
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ disabled }) => (disabled ? 'red' : 'black')};

  &:hover {
    background-color: black;
    color: white;
  }
`;
