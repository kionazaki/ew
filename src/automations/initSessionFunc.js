var initSessionFunc = {

    setIssueId: function (state, pars) {
        state.session.issueFromServer = pars.issue;
        return state;
    }
};

export default initSessionFunc;
