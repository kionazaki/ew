import sendCommand from "app/library/sendCommand";
import API from "app/library/API";

const name = 'initSession';

function initSession(state){
    console.log(state);
    if (state.session.render ===  null
        && state.session.token === undefined
        && state.session.mode === null
        && state.session.issueFromServer === null){

        getIssueId(state);

    }

    return state;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getIssueId(state){
    let projectId = state.setup.id;
    API(
        `http://kionazaki.github.io/tmp/get-issue-id.json?projectid=${projectId}`,
        (r)=>{sendCommand(name, 'setIssueId', r.data)},
        (e)=>{console.log(e.status + ': ' + e.statusText);}
    );
}



export default initSession;

