import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment Counter');
export const increment_by_2 = createAction('[Counter] Increment_by_2 Counter');
export const decrement = createAction('[Counter] Decrement Counter');
export const multiply = createAction('[Counter] Multiply Counter');
export const divide = createAction('[Counter] Divide Counter');


export const storeCounter = createAction(
  '[Counter] Store Counter',
  props<{ val: number }>()
);
