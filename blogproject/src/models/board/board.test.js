import { render, screen } from '@testing-library/react';
import Board from './board';

describe('content', () => {
  const board = Board;
  const content = {
    id: 1,
    head: '알라리깡숑',
    text: '얄리얄리얄라셩',
    tag: 'test',
  };
  const content2 = {
    id: 2,
    head: '알라리깡숑',
    text: '얄리얄리얄라셩',
    tag: 'test2',
  };
  board.create(content.id, content);
  board.create(content2.id, content2);
  test('게시물을 생성할 수 있어야 합니다', () => {
    const expectedMap = new Map();
    expectedMap.set(1, {
      id: 1,
      head: '알라리깡숑',
      text: '얄리얄리얄라셩',
      tag: 'test',
    });
    expectedMap.set(2, {
      id: 2,
      head: '알라리깡숑',
      text: '얄리얄리얄라셩',
      tag: 'test2',
    });

    expect(board.info).toEqual(expectedMap);
  });
  test('게시물을 삭제할 수 있어야 합니다.', () => {
    board.delete(content.id);
    const expectedMap = new Map();
    expectedMap.set(2, {
      id: 2,
      head: '알라리깡숑',
      text: '얄리얄리얄라셩',
      tag: 'test2',
    });

    expect(board.info).toEqual(expectedMap);
  });
  test('게시물을 수정할 수 있어야 합니다.', () => {
    const content3 = {
      id: 3,
      head: '알라리깡숑',
      text: '얄리얄리얄라셩',
      tag: 'test3',
    };
    board.update(content2.id, content3);
    const expectedMap = new Map();
    expectedMap.set(2, {
      id: 3,
      head: '알라리깡숑',
      text: '얄리얄리얄라셩',
      tag: 'test3',
    });
    expect(board.info).toEqual(expectedMap);
  });
});
