import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyGame } from '../app.state';
import { GetNewGame } from '../../game/state/';

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
    this.newGame();
    this.game$ = this.store.pipe(select(getMyGame));
  }

  newGame(){
  }

}
