import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Moment from 'react-moment';
import high from '../images/high.png'
import medium from '../images/medium.png'
import low from '../images/low.png'
import audit from '../images/audit.png'
import { AddCircle , Edit,Add as AddIcon,Delete,PlayArrow,Done } from '@material-ui/icons';


const Wrapper = styled.ul`
`

function Tasks(props) {

    const [rows,setRows]=useState([]);
    const sid=sessionStorage.getItem("sid")
    const get=event=>{
        console.log("getting tasks");
        const url=window.$url+"/eddie/tasks/get?sid="+window.$sid+"&size=7&page=0&sortBy=startTimestamp&sortDirection=desc&severity=medhigh&isDone=false";
     axios.get(url,{
 
     }).then((response)=>{
         console.log("tasks got "+response.data.data+" - "+response.data)
         
        // alert(response.data.data);
        if (response.data.data==undefined)  return
         if (response.data.data=="ERR SSN"){props.history.push("/login")}
         else {
            if (response.data.data==undefined){response.data.data=null}
            else {
                setRows(response.data.data);
            }
        }
     })
    }

    const handleClick=(e,id)=>{
        alert(id);
    }

   

    const getSeverityIcon=(severity)=>{
        switch(severity){
            case 'high': return high
            case 'medium': return medium
            case 'low': return low
            case 'audit': return audit
        }
      
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: "#d5013b",
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);

    const setDone=(e,id,name,description,severity,assignee,isDone)=>{
        alert(description)
        axios.post(window.$url+"/eddie/tasks/add",{
            sid:sid,
            name:name,
            description:description,         
            id:id,
            severity:severity,
            assignee:assignee,
            isDone:true,
          }).then((response)=>{
           if (response.data.resultSuccess) {
               //alert("Added");
              get()
           }
          })
       
    }
    useEffect(()=>{
         get()
     },[])
    return (
        <Wrapper>
            <div style={{position:"absolute",width:"450px",left:"1080px",top:"10px"}}>  
            <TableContainer component={Paper} style={{height:"400px"}}>
                   
                    <Table  aria-label="simple table" size="small">
                    
                    <TableHead>
                        <TableRow>
                    
                     
                       <StyledTableCell align="left"><b>Recent WFs</b></StyledTableCell>
                       
                       </TableRow>
                       </TableHead>
                       <TableBody >
                       {rows.map(row => (
                           <TableRow  hover key={row.assgineeName}  selected={false}   onClick={event => handleClick(event, row.username)}>
                          
                           <TableCell width="100%" align="left" > <img src={getSeverityIcon(row.severity)} style={{height:"17px",top:"4px",position:"relative"}}/> &nbsp;&nbsp;{row.assigneeName} {row.name}<div style={{textAlign:"right",position:"relative",top:"-20px",height:"10px"}} ><Done onClick={e=>{e.stopPropagation();setDone(e,row.id,row.name,row.description,row.severity,row.assigneeName,row.isDone)}}/><Delete/></div></TableCell>
                          
                         
                           
                           
                           </TableRow>
                       ))}
                           </TableBody>
                           
                       </Table>
                       </TableContainer>
                   </div>
        </Wrapper>
    )

}


export default Tasks