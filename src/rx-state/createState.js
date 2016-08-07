import Rx from "rxjs";


import initSession from "app/automations/initSession";



function createState(reducer$, initialState$ = Rx.Observable.of({})) {
  return initialState$
    .merge(reducer$)
    .scan((state, reducer) => reducer(state))

    .map(r=>initSession(r))


    .publishReplay(1)
    .refCount();
}

export default createState;
