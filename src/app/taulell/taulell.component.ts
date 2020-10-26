import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CasellaComponent } from '../casella/casella.component';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.scss']
})
export class TaulellComponent implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;
  empat: boolean;
  desabilitarboto: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.empat = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.squares.every(this.calculaempat) && this.winner == null) {
      this.empat = true;
    }
    if (!this.squares.every(this.calculaempat)) {
      setTimeout(() => this.enemyMove(), 100);
      console.log(this.squares);
    }
  }

  enemyMove() {
    var random = Math.floor(Math.random() * 9);
    while (this.squares[random] !== null) {
      random = Math.floor(Math.random() * 9);
    }
    if (this.winner != null) {
      return null;
    }
    else {
      this.squares.splice(random, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }

  }

  disableTaulell() {
    if (this.winner != null || this.squares.every(this.calculaempat)) {
      return true;
    }
  }

  calculaempat(val) {
    return (val === 'X' || val === 'O');
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
        return this.squares[a];
      }
    }
    return null;
  }
}
