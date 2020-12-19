import { createAction, handleAction } from 'redux-actions';

// 액션 생성 함수 만들기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

// hadnleaction 첫 번 째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고,
// 두번째 파라미터에는 초기 상태를 넣어 준다
// const counter = handleAction(
//     {
//         INCREASE: (state, action) => ({ number: state.number + 1 }),
//         DECREASE: (state, action) => ({ number: state.number - 1 }),
//     },
//     initialState
// )
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };

        default:
            return state;
    }
}

export default counter;