import Rx from "rxjs";
import dispatcher$ from "app/dispatcher";
import getTokenAsyncFunc from "app/library/getTokenAsyncFunc";
import initSessionFunc from "app/automations/initSessionFunc";


const easyWebReducer$ = dispatcher$
    .map(command => {
        var pars = command.pars;
        switch (command.action) {
            case 'getTokenAsync.changeToken':
                return state => {return getTokenAsyncFunc.changeToken(state, pars)};
            case 'getTokenAsync.setTokenToUndefined':
                return state => {return getTokenAsyncFunc.setTokenToUndefined(state)};
            case 'initSession.setIssueId':
                return state => {return initSessionFunc.setIssueId(state, pars)};
        }
    });

export default easyWebReducer$;
