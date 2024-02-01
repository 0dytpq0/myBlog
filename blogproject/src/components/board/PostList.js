import React from 'react';
import Board from '../../models/board/Board';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 100px;
  background-color: red;
  color: white;
`;

function PostList() {
  const board = new Board();

  board.create('first', { head: 'goat', text: 'faker', tag: 'lol' });
  board.create('second', { head: 'goat', text: 'faker', tag: 'lol' });
  board.create('third', { head: 'goat', text: 'faker', tag: 'lol' });
  board.create('fourth', { head: 'goat', text: 'faker', tag: 'lol' });

  const postList = () => {
    const posts = board.info;
    const renderedPosts = [];

    posts.forEach((value, key) => {
      renderedPosts.push(
        <StyledPost key={key}>
          {key}:{' '}
          {`head : ${value.head} text : ${value.text} tag : ${value.tag}`}
        </StyledPost>
      );
    });

    return renderedPosts;
  };

  return <>{postList()}</>;
}
export default PostList;
