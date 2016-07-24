import Rx from "rxjs";
import todoReducer$ from "app/reducers/todoReducer";

// ����� � ����������� ����� ���������� reducer-� ���� �����������
const reducer$ = Rx.Observable.merge(
    todoReducer$
);

export default reducer$;