import Rx from "rxjs";
import initSession from "app/automations/initSession";

function automation(state$) {
    return state$
       .map(r=>initSession(r));
}

export default automation;