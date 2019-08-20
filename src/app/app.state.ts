import { ActionReducerMap } from '@ngrx/store';
import * as gameStore from '../game/state';

export interface AppState {
  game: gameStore.State;
}

export const initialState: AppState = {
  game: gameStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  game: gameStore.reducer
};

export const effects: Array<any> =  [
  gameStore.GameEffects
]
export const getMyGame = (s: AppState) => s.game;
