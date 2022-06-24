import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers';
import {increment, decrement, storeCounter, increment_by_2, multiply, divide} from './actions/counter.actions';
import { getCount } from './selectors/counter.selector';
import { Observable, interval } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular & NgRx';
  count$: Observable<number>;
  storage$: Observable<any>;

  constructor(private store: Store<AppState>, private storage: StorageMap) {
    this.count$ = this.store.pipe(select(getCount));
    this.storage$ = this.storage.get('count');
  }


  decrement(): void {
    this.store.dispatch(decrement());
  }
  increment(): void {
    this.store.dispatch(increment());
  }
  increment_by_2(): void {
    this.store.dispatch(increment_by_2());
  }
  multiply(): void {
    this.store.dispatch(multiply());
  }
  divide(): void {
    this.store.dispatch(divide());
  }
  storeVal(num: number): void {
    this.store.dispatch(storeCounter({ val: num }));
  }
  ngOnInit(): void {
    this.increment();
  }
}
