import React from "react";
import TodoItem from "app/components/TodoItem/TodoItem";

class TodoList extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired,
        pathName: React.PropTypes.string.isRequired
    };
    render() {
        let newsTemplate = this.props.items
            // ������ ������ ������� �������� �������
            .map(function(item, index) {item.index = index; return item;}) //
            // ������������� �� ��������
            .filter((item)=>{
                if (this.props.pathName === '/active'){
                    return !item.checked;
                }
                if (this.props.pathName === '/completed'){
                    return item.checked;
                }
                return true;
            })
            // ������������� ���������� �������� � ����������
            .map(function(item) {
                return (
                   <TodoItem key={item.index} {...item}  />
                )
            });

        return (
            <ul className="todo-list">
                {newsTemplate}
            </ul>
        );
    }
}
export default TodoList;
