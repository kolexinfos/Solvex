import { Action } from '@ngrx/store';

export const GET_NEW_GAME = 'Get New Game';
export const SCORE_GAME = 'Score Game';
export const END_GAME = 'End Game';

export class GetNewGame implements Action {
  readonly type: string = GET_NEW_GAME;

  constructor(public payload: any) {
    console.log('ACTION ' + GET_NEW_GAME);
  }
}

export class ScoreGame implements Action {
  readonly type: string = SCORE_GAME;

  constructor(public payload: any) {
    console.log('ACTION ' + SCORE_GAME);
  }
}

export class EndGame implements Action {
  readonly type: string = END_GAME;

  constructor(public payload: number) {
    console.log('ACTION ' + END_GAME);
  }
}

export type GameAction = GetNewGame | ScoreGame | EndGame;
