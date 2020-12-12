import React, { useEffect, useState } from 'react';

const Info = () => {

    const [name, setName] = useState(0);
    const [nickname, setNickName] = useState('');

    useEffect(() => {
        // console.log('렌더링 완료');
        // console.log({ name, nickname });
        //console.log('마운트 될때만 실행');

        // useeffet) 특정 값이 업데이트 될때만 실행하고 싶을  때
        console.log('effet');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickName(e.target.value);
    }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
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
