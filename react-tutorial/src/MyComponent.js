import React from 'react';
import propTypes from 'prop-types';

// 파라미터에 props를 사용하는 비구조화 할당 문법
const MyComponent = ({ name, children, favoriteNumber }) => {

    return (
        <div> 안녕하세요 제 이름은 {name} 입니다. <br />
            children 값은 {children} 이지요 <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
}

MyComponent.propTypes = {
    name: propTypes.string, // name의 값은 string으로 전달
    favoriteNumber: propTypes.number.isRequired // isrequired 필수로 proptypes 설정
}

// props default 설정
MyComponent.defaultProps = {
    name: '기본 이름'
}

export default MyComponent;