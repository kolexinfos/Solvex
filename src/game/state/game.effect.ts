import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { INITIATE_TIME_HOP, TimeHopComplete, InitiateTimeHop } from './game.actions';
import { PopService } from '../../app/pop.service';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private pop: PopService) {

  }

  @Effect()
  public InitiateTimeHop  = this.actions$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap ((action: InitiateTimeHop) =>
      this.pop.popGame().pipe(
        map(name => new TimeHopComplete(name))
      ),
    ),
  );
}
