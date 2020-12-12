import React, { useState } from 'react';

const IteractionSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({ // concat은 새로운 배열을 만들어 줌
            id: nextId, // nextId 값을 id로 설정
            text: inputText
        })
        setNextId(nextId + 1); // nextId 값에 1을 더해 준다
        setNames(nextNames); // names 값을 업데이트한다
        setInputText(''); // inputtext를 비운다
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ))

    //const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {namesList}
            </ul>
        </div>
    );
};

export default IteractionSample;