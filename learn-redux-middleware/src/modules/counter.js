import { createAction, handleActions } from "redux-actions";

// counter redux modules
// 액션 타입을 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 액션 생성 함수 만들기
// createAction 함수를 사용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0; // 상태는 꼭 객체일 필요가 없다

const counter = handleActions(
    {
        [INCREASE]: state => state + 1, //첫 파라미터: 각 액션에 대한 업데이트 함수
        [DECREASE]: state => state - 1 // 두 번째 파라미터: 초기 상태
    },
    initialState
)

export default counter;