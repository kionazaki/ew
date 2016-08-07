import React from "react";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import EasyWebApp from "app/components/EasyWebApp/EasyWebApp";



import ReactDOM from "react-dom";
//import init from "app/library/init"





class App extends React.Component {
    render() {
        const state =  this.props;
        return(
            <EasyWebApp  {...state} />
        );
    }
}

//init.createRootElement();
//ReactDOM.render(<App/>, document.getElementById('ewRoot'));


export default connect(state$)(App);
