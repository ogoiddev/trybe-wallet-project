const Form = styled.form`
  border: 1px solid;
`;

const Label = styled.label`
  border: 1px solid red;
`;

const Input = styled.input`
  border: none;

  &:Focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default { Form, Label, Input, Button };
