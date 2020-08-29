import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Map,AssessmentOutlined, Fingerprint,Phonelink,PermIdentity,Assignment,Memory,Settings,Search } from '@material-ui/icons';
import { withRouter } from "react-router-dom";
const Wrapper = styled.ul`
.menumain{
    position:fixed;
    width:50px;
    height:100%;
    top:0px;
    background-color:#22262C;
    color:white;
    left:0px;
}
.icons{
    position:absolute;
    left:0px;
    top:27%;
    width:50px;
}

.hr{
    height: 1px;
    color: red;
    background-color: #252b22;
    border: none;
}
.dark{
    color:grey;
}
.icon{
    padding-top:5px;
}
.icon:hover{
    color:white;
    cursor: pointer;
}
.eddie{
    width:30px;
}
`;



function Menu(props){

    const dark="icon dark"
    const white="icon white"
    const [m1,setM1]=useState(dark);
    const [m2,setM2]=useState(dark);
    const [m3,setM3]=useState(dark);
    const [m4,setM4]=useState(dark);
    const [m5,setM5]=useState(dark);
    const [m6,setM6]=useState(dark);
    const [m7,setM7]=useState(dark);

    const chooseMenu=(id)=>{
        
        //var id=event.currentTarget.id;
        console.log(id);
        unselectMenu(id);
        updateIcon(id)
        props.history.push("/"+id)
    }

    const updateIcon=(id)=>{
        if (id==""){setM2(white)}
        if (id=="dashboard"){setM1(white)}
        if (id=="map"){setM2(white)}
        if (id=="tasks"){setM3(white)}
        if (id=="analyze"){setM4(white)}
        if (id=="search"){setM5(white)}
        if (id=="servers"){setM6(white)}
        if (id=="settings"){setM7(white)}
    }

    const unselectMenu=(name)=>{
        console.log(name);
        
    }
    
    useEffect(()=>{
       var url=props.location.pathname;
       url = url.substr(1);
       url=url.split("/")
       //alert(url[0])
       updateIcon(url[0])
    })
        return (
            <Wrapper>
                <div className="menumain">
                <div className="icons">
                    <AssessmentOutlined title="Dashboard" id="dashboard" value="dashboard" className={m1} onClick={(e)=>{chooseMenu(e.currentTarget.id)}}/><br/><hr className="hr"/>
                    <Settings title="settings" id="settings" onClick={(e)=>{chooseMenu(e.currentTarget.id)}} className={m7}/><br/><hr className="hr"/>
                </div>
                </div>
            </Wrapper>
        )
    
}

export default withRouter(Menu);
