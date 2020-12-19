import React, { Component } from 'react';
// 이벤트 사용 할 때 주의 사항
// 1. 이벤트에 실행할 자바스크립트 코드를 전달 하는 것이 아니라 함수형태의 값을 전달
// 2. DOM 요소에만 이벤트 설정 할 수 있다.

// 이벤트 
// 1. onChange 
// 2. onKeyPress
class EventPractice extends Component {
    state = {
        message: '',
        uerName: ''
    }
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // constructor를 사용하지 않고 화살표식으로 바인딩 처리
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
            // []안에 있는 레퍼런스가 가르키는 실제 값이 key 값으로 사용
        })
    }

    handleClick = () => {
        alert(this.state.userName + ' : ' + this.state.message);
        this.setState({
            message: '',
            userName: ''
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="userName"
                    placeholder="이름 입력 해"
                    value={this.state.userName}
                    onChange={this.handleChange}
                /> <br />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력 해"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;