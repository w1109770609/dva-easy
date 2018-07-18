import React from 'react';
import { Router, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
function routers(props){
    return (
        <Router history={props}>
            <Route path="/home" component={dynamic({
                app:props.app,
                models:()=>[],
                component:()=>import(/*webpackChunkName:'home'*/'@/views/home/home')
            })}></Route>
        </Router>
    )
}
export default routers