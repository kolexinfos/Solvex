import { GET_NEW_GAME, SCORE_GAME, END_GAME} from './game.actions';
import * as programActions from './game.actions';

export function reducer(state: any, action: programActions.GameAction): any {
  switch (action.type) {
    case GET_NEW_GAME: {
      console.log('REDUCER ' + GET_NEW_GAME);
      return{
        isActive: true,
        name: 'HRGame',
        stages: 9
      };
    }
    case SCORE_GAME: {
      console.log('REDUCER ' + SCORE_GAME);
      return{
        ...state,
        isActive: false
      };
    }
    case END_GAME: {
      console.log('REDUCER stages remaining is ' + action.payload + ' ' + END_GAME);
      return{
        ...state,
        stages: (state.stages - action.payload)
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
