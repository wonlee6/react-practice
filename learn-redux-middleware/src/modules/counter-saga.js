import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// 액션 생성 함수 만들기
const INCREASE_ASYNC = 'counter-saga/INCREASE';
const DECREASE_ASYNC = 'counter-saga/DECREASE';

const INCREASE = 'counter-saga/INCREASE';
const DECREASE = 'counter-saga/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefinded를 두번 째 파라미터로 넣어 준다
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());// 특정 액션을 디스패치합니다.
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 함
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLastest는  기존에 진행중이던 작업이 있다면 취소 처리하고
    // 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
)
export default counter;