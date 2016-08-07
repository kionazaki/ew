import Rx from "rxjs";
import easyWebReducer$ from "app/reducers/easyWebReducer";

// Здесь в перспективе будут собираться reducer-ы всех компонентов
const reducer$ = Rx.Observable.merge(
    easyWebReducer$
);

export default reducer$;