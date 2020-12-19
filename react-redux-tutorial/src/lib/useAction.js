import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// useActions Hook은 액션 생성 함수를 액션을 디스패치하는 함수로 변환
// 액션 생성 함수를 사용하여 액션 객체를 만들고 이를 스토어에 디스패치하는 작업을 해주는 
// 함수를 자동으로 만들어 주는 것

// 2가지 파라미터가 필요 
// 첫 번째는 액션 생성 함수로 이루어진 배열 
// 두 번째는 deps 배열
export default function useAction(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    )

}