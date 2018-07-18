import React, { Component } from 'react';
import {connect} from 'dva'
class Home extends Component {
    render() {
        return (
            <div>
                <h1 onClick={this.add}>触发add</h1>
                <h1 onClick={this.minus}>触发minus</h1>
                {this.props.todo}
                <h1 onClick={this.asyncL}>异步触发</h1>
                {this.props.data.code}
            </div>
        );
    }
    add=()=>{
        this.props.dispatch({
            type:'todo/add'
        })
    }
    minus=()=>{
        this.props.dispatch({
            type: 'todo/miuns'
        })
    }
    asyncL=()=>{
        this.props.dispatch({
            type:'todo/asyncL'
        })
    }
}

export default connect((state)=>{
    return {
        todo:state.todo,
        data:state.data
    }
},null)(Home);
