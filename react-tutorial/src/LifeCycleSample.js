import React, { Component } from 'react';

// LifeCycle 에는 3가지로 나누어 진다.
// 마운트 , 업데이트 , 언마운트
// update 에서 shouldComponentUpdate 리렌더링 할지 여부 결정하는 메소드 true, false 




class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {  // (1)
        super(props)
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) { // 부모에게 받은 color 값을 state 동기화 (2)
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() { // (4)
        console.log('componentDidMount');
    }
    // state.number 값의 마지막 수고 4면 리렌더링 취소 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 didUpdate에서 조회 할수 있게 함
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidMount', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상 : ', snapshot);
        }
    }
    render() {

        console.log('render'); // (3)

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;