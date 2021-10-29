import { fork, take, put } from 'redux-saga/effects';
import * as type from './../constants/actionType';


function* watchSelecAction() {
    while (true) {
        yield take(type.INITIALIZE);
    }
}

function* rootSaga() {
    yield fork(watchSelectAction);
}

export default rootSaga;