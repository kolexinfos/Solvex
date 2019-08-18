import { Action } from '@ngrx/store';

export const GET_NEW_GAME = 'Get New Game';

export class GetNewGame implements Action {
  readonly type: string = GET_NEW_GAME;

  constructor(public payload: any) {
    console.log('ACTION ' + GET_NEW_GAME);
  }
}

export type GameAction = GetNewGame;
