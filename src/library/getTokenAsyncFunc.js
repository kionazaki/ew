var getTokenAsyncFunc = {

    changeToken: function (state, pars) {
        state.session.token = pars.token;
        return state;
    },

    setTokenToUndefined: function (state) {
        if (state.session.token === null){
            state.session.token = undefined;
        }
        return state;
    }
};

export default getTokenAsyncFunc;