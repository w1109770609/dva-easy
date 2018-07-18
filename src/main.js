import dva from "dva";
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import RouterConfig from './router/router.config'
const app = dva({
    history: createHistory()
})
console.log(app)

app.model({
    namespace:'todo',
    state:1,
    reducers:{
        add(state,action){
            return state+1
        },
        miuns(state,action){
            return state-1
        },
        getData(state, action){
            return action.payload
        }
    },
    effects:{
        // put 用于触发 action
        // call 用于调用异步逻辑，支持 promise
        //const result = yield call(fetch, '/todos');
        // select 用于从 state 里获取数据。
        //const todos = yield select(state => state.todos);
        *asyncL(action,{put,call,select}){
            const getData = yield call(fetch,'/server/data.json')
            const result = yield getData.json()
            yield put({
                type: 'data/getData',
                payload: result
            })
        }
    }
})

app.model({
    namespace:'data',
    state:{},
    reducers:{
        getData(state,action){
            return action.payload
        }
    }
})
app.router(({history})=>{
    return <RouterConfig {...history} app={app}></RouterConfig>
})
app.start('.app')


// 基于 action 进行页面跳转
// import { routerRedux } from 'dva/router';

// // Inside Effects
// yield put(routerRedux.push('/logout'));

// // Outside Effects
// dispatch(routerRedux.push('/logout'));

// // With query
// routerRedux.push({
//   pathname: '/logout',
//   query: {
//     page: 2,
//   },
// });