class Board {
  constructor(n) {
    this.n = n;
    this.board = [];

    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push("");
      }
      this.board.push(row);
    }
  }
}

// Updates the board coordinate with the current player's marker and then checks for a winner
Board.prototype.turn = function(x, y, player) {
  this.board[y][x] = player;
  return this.checkWin(x, y, player);
};

Board.prototype.checkWin = function(x, y, player) {
  var i = 0;

  // Checks columns for win
  for (i = 0; i < this.n; i++) {
    if (this.board[i][x] !== player) {
      break;
    }
    if (i === this.n - 1) return player;
  }

  // Checks rows for win
  for (i = 0; i < this.n; i++) {
    if (this.board[y][i] !== player) {
      break;
    }
    if (i === this.n - 1) return player;
  }

  // Checks diagonals for win
  for (i = 0; i < this.n; i++) {
    if (this.board[i][i] !== player) {
      break;
    }
    if (i === this.n - 1) return player;
  }

  // Checks opposite diagonals for win
  for (i = 0; i < this.n; i++) {
    if (this.board[i][(this.n - 1) - i] !== player) {
      break;
    }
    if (i === this.n - 1) return player;
  }

  return null;
};

export default Board;
