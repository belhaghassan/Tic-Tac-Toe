import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  squares: string[] = [];
  xIsNext: boolean = false;
  winner: string = "null";
  xwins: number = 0;
  owins: number = 0;
  onButton: boolean = false;
  array1: number[] = [];

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "null";
    this.xIsNext = true;
  }

  winningSquares(index: number) {
    if (this.winner === 'null')
      return false;
    else if (index === this.array1[0]  ||
          index === this.array1[1]  ||
          index === this.array1[2])
        return false;
    else 
        return true;

  }

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  makeMove(idx: number) {
    if (this.winner=="null"){
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
      
      this.winner = this.calculateWinner();

      if(this.winner=='X') this.xwins += 1;
      else if (this.winner=='O') this.owins += 1;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.array1 = [a,b,c];
        return this.squares[a];
        
      }
    }
    return "null";
  }
}
