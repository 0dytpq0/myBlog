// Board.js

class Board {
  constructor() {
    this.info = new Map();
  }

  create(id, content) {
    this.info.set(id, content);
  }

  delete(id) {
    this.info.delete(id);
  }

  update(id, newContent) {
    if (this.info.has(id)) {
      this.info.set(id, newContent);
    }
  }
}

export default Board;
