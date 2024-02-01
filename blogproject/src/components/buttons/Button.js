import React from 'react';
import styled from 'styled-components';
import Board from '../../models/board/Board';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #c9d7dd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #c9d7dc;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export function Button(text, onClickFunction) {
  return <StyledButton onClick={onClickFunction}>text</StyledButton>;
}

export default Button;
