import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyGame } from '../app.state';
import { GetNewGame, ScoreGame, EndGame } from '../../game/state/';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game$: Observable<any>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    console.log('Game Component loaded');
    this.newGame();
    this.game$ = this.store.pipe(select(getMyGame));
  }

  newGame() {
    this.store.dispatch(new GetNewGame(null));
  }

  scoreGame() {
    this.store.dispatch(new ScoreGame(null));
  }

  endGame() {
    this.store.dispatch(new EndGame(3));
  }

  checkStore() {
    console.log(this.game$);
  }

}
