import React from "react";
import TodoHeader from "app/components/TodoHeader/TodoHeader";
import TodoMain from "app/components/TodoMain/TodoMain";
import TodoFooter from "app/components/TodoFooter/TodoFooter";

import sendCommand from "app/library/sendCommand"
//import state$ from "app/state";
//import connect from "app/rx-state/connect";

class EasyWebApp extends React.Component{
    render(){


        const name = 'EasyWebApp';
        const testValue = this.props.session.token;



        //const rend = this.props.render;


        //sendCommand(name, 'changeToken', {index: index});

        return (
            <div className="ewApp">
                <p className="ewApp__test">
                Текст!!!
                </p>

                <button onClick = {() => sendCommand('index', 'changeToken', {token: 6666})}>{testValue}</button>
            </div>
        );
    }
}

export default EasyWebApp;




/*
const stateData = {
    newTodoValue: this.props.todos.newTodoValue
};

const mainData = {
    toggleAll: this.props.todos.toggleAll,
    items:  this.props.todos.items,
    pathName: this.props.location.pathname
};

const footerData = {
    items: this.props.todos.items,
    pathName: this.props.location.pathname
};
*/


/*
<section className="todoapp">
    <TodoHeader {...headerData} />
    {itemsExists?<TodoMain {...mainData} />:'' }
    {itemsExists?<TodoFooter {...footerData} />:'' }
</section>

    */