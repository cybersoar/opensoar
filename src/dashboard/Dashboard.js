import React from 'react'
import styled from 'styled-components';
import {Redirect,withRouter } from "react-router-dom";

import Menu from '../menu/Menu';
const Wrapper = styled.ul`
.main{
    position:absolute;
    width:100%;
    text-align:center;
    height: 100%;
    margin:0;
    padding:0;
    background-color:#333333;
    left:0;
    top:0px;
    
}
.menu{
    position:absolute;
    left:0px;
    top:50px;
}`
function Dashboard(props) {

    return (
        <Wrapper>
        <div className="main">
        <Menu className="menu"/>
        test
        </div>
        </Wrapper>
    )
}
export default Dashboard