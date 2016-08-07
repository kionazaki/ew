import templateState from "app/rx-state/templateState";

let localState = JSON.parse( localStorage.getItem('easyweb')) || templateState;
setSessionPropsToNull(localState);

function setSessionPropsToNull(){
    localState.session.render = null;
    localState.session.token = null;
    localState.session.mode = null;
    localState.session.issueFromServer = null;
    localState.session.stateFromServer = null;
}

export default localState ;