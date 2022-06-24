import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {storeCounter} from '../actions/counter.actions';
import {map} from 'rxjs/operators';
import {StorageMap} from '@ngx-pwa/local-storage';

@Injectable()
export class CounterEffects {
    setCounter$ = createEffect(() => this.actions$.pipe(ofType(storeCounter), map(action => {
        this.storage.set('count', action.val).subscribe();
        return action;
        console.log(action.val);
    })), {dispatch: false});

    constructor(private actions$: Actions, private storage: StorageMap) {
    }
}
