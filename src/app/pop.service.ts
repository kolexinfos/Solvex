import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
export class PopService {

  popGame(): Observable<any> {
    console.log('POP Game');

    const milliseconds = 1000;

    return Observable.create(observer => {
      setTimeout(() => {
        console.log('Done waiting');
        observer.next('done');
          observer.complete();
      }, milliseconds);
    });
  }
}
