import Rx from "rxjs";
import getTokenAsyncFunc from "app/library/getTokenAsyncFunc";
import dispatcher$ from "app/dispatcher";

const easyWebReducer$ = dispatcher$
    .map(command => {
        var pars = command.pars;
        switch (command.action) {
            case 'getTokenAsync.changeToken':
                return state => {return getTokenAsyncFunc.changeToken(state, pars)};
            case 'getTokenAsync.setTokenToUndefined':
                return state => {return getTokenAsyncFunc.setTokenToUndefined(state)};
        }
    });

export default easyWebReducer$;
