import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #61dafb;
  color: white;
  font-size: 1em;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa8e8;
  }
`;

const EncryptButton = ({ onClick }) => {
  return <Button onClick={onClick}>Encrypt File</Button>;
};

export default EncryptButton;
