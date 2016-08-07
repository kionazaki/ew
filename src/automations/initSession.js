import sendCommand from "app/library/sendCommand"

function initSession(state){
    console.log(state);
    if (state.session.render ===  null
        && state.session.token === undefined
        && state.session.mode === null
        && state.session.issueFromServer === null){

        console.log('getIssueId()');
    }




    //var toggleAll = true;
    //state.todos.items.forEach((item)=>{
    //    if (!item.checked){
    //        toggleAll = false;
    //    }
    //});
    //state.todos.toggleAll = toggleAll;




    return state;
}

export default initSession;

