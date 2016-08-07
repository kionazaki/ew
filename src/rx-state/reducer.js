import Rx from "rxjs";
import easyWebReducer$ from "app/reducers/easyWebReducer";

// ����� � ����������� ����� ���������� reducer-� ���� �����������
const reducer$ = Rx.Observable.merge(
    easyWebReducer$
);

export default reducer$;