import { GET_NEW_GAME} from './game.actions';
import * as programActions from './game.actions';

export function reducer(state: any, action: programActions.GameAction): any {
  switch (action.type) {
    case GET_NEW_GAME: {
      console.log('REDUCER ' + GET_NEW_GAME);
      return{
        isActive: true,
        name: 'HR Game',
        stages: 9
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
