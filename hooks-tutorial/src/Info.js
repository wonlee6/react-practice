import React, { useEffect, useReducer, useState } from 'react';
import useInputs from './UseInputs';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}
const Info = () => {

    // const [name, setName] = useState(0);
    // const [nickname, setNickName] = useState('');

    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // })

    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    })

    const { name, nickname } = state;

    // const onChange = e => {
    //     dispatch(e.target);
    // }

    // useEffect(() => {
    //     // console.log('렌더링 완료');
    //     // console.log({ name, nickname });
    //     //console.log('마운트 될때만 실행');

    //     // useeffet) 특정 값이 업데이트 될때만 실행하고 싶을  때
    //     console.log('effet');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickName(e.target.value);
    // }
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
