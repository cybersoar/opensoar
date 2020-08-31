import React, { useEffect,useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import high from '../images/high1.png'
import medium from '../images/medium1.png'
import low from '../images/low.png'
import audit from '../images/audit.png'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Wrapper = styled.ul`


`

function Table1(props) {
    const [rows,setRows]=useState([]);
    //const sid=sessionStorage.getItem("sid")
    const getIncidents=event=>{

      //var res=JSON.parse('{"resultSuccess":true,"type":"FUNCTION","data":{"content":[{"id":"HuNCO3QBhzr1rnwhooyK","severity":"high","message":"<86>Aug 29 19:27:36 prowler sshd[22475]: Accepted publickey for root from 37.142.175.99 port 21112 ssh2: RSA SHA256:8kpaRpg3QW3LJ3XXOS9rYv8qpeIHBOvTqTTDCtk4ip0","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"37.142.175.99","user":"root"},"startTimestamp":1598722056812,"description":"user root successfully logeed in from 37.142.175.99 "},{"id":"i-O9OnQBhzr1rnwhzIAE","severity":"high","message":"<86>Aug 29 17:02:31 prowler sshd[20290]: Accepted publickey for root from 141.226.75.194 port 8606 ssh2: RSA SHA256:8kpaRpg3QW3LJ3XXOS9rYv8qpeIHBOvTqTTDCtk4ip0","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"141.226.75.194","user":"root"},"startTimestamp":1598713351142,"description":"user root successfully logeed in from 141.226.75.194 "},{"id":"OuNzOnQBhzr1rnwh1Hkf","severity":"high","message":"<86>Aug 29 15:41:43 prowler sshd[18978]: Accepted publickey for root from 63.141.253.202 port 42624 ssh2: RSA SHA256:EN40RiAfaM1AP02l0Of3b345nZRFLxzMhf6gOIge6S4","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"63.141.253.202","user":"root"},"startTimestamp":1598708503554,"description":"user root successfully logeed in from 63.141.253.202 "},{"id":"KONzOnQBhzr1rnwhgXnr","severity":"high","message":"<86>Aug 29 15:41:22 prowler sshd[18953]: Accepted publickey for root from 63.141.253.202 port 42622 ssh2: RSA SHA256:EN40RiAfaM1AP02l0Of3b345nZRFLxzMhf6gOIge6S4","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"63.141.253.202","user":"root"},"startTimestamp":1598708482509,"description":"user root successfully logeed in from 63.141.253.202 "},{"id":"JeNzOnQBhzr1rnwhLnkB","severity":"high","message":"<86>Aug 29 15:41:01 prowler sshd[18935]: Accepted publickey for root from 63.141.253.202 port 42620 ssh2: RSA SHA256:EN40RiAfaM1AP02l0Of3b345nZRFLxzMhf6gOIge6S4","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"63.141.253.202","user":"root"},"startTimestamp":1598708461029,"description":"user root successfully logeed in from 63.141.253.202 "},{"id":"IuNzOnQBhzr1rnwhBXlU","severity":"high","message":"<86>Aug 29 15:40:50 prowler sshd[18920]: Accepted publickey for root from 63.141.253.202 port 42618 ssh2: RSA SHA256:EN40RiAfaM1AP02l0Of3b345nZRFLxzMhf6gOIge6S4","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"63.141.253.202","user":"root"},"startTimestamp":1598708450605,"description":"user root successfully logeed in from 63.141.253.202 "},{"id":"EONyOnQBhzr1rnwhu3nA","severity":"high","message":"<86>Aug 29 15:40:31 prowler sshd[18889]: Accepted password for root from 63.141.253.202 port 42616 ssh2","status":"new","product":"Linux","action":"user logged in","deviceName":"eddie","reportingIP":"176.31.110.32","params":{"ip":"63.141.253.202","host":"prowler","user":"root"},"startTimestamp":1598708431778,"description":"user root successfully logeed in from 63.141.253.202 "}],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"offset":0,"pageNumber":0,"pageSize":7,"paged":true,"unpaged":false},"totalPages":6,"totalElements":37,"last":false,"size":7,"number":0,"sort":{"sorted":true,"unsorted":false,"empty":false},"first":true,"numberOfElements":7,"empty":false}}')
      var incidents='[{"id":"a","severity":"high"},{"id":"b","severity":"high"}]'
      //setRows(JSON.parse(incidents))

      
        console.log("getting incidents");
        window.$url=window.location.protocol+"//api-"+window.location.hostname
        var sid="023d2f43-2cfc-4689-8175-1157e370c05b"
        const url=window.$url+"/eddie/getIncidents?sid="+sid+"&size=7&page=0&sortBy=startTimestamp&sortDirection=desc&severity=medhigh";
     axios.get(url,{
       
     }).then((response)=>{
         console.log("got "+response.data.data.content)
         //alert(response.data.data.content);
         if (response.data.data=="ERR SSN"){props.history.push("/login")}
         else {
            if (response.data.data.content==undefined){response.data.data.content=null}
            else {
                setRows(response.data.data.content);
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
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);

    useEffect(()=>{
        let interval = null;
         getIncidents()
         interval = setInterval(() => {
            getIncidents()
            }, 5000);
     },[])
    return (
        <Wrapper>
             <div style={{width:"1000px",position:"absolute",left:"60px",top:"60%"}}>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
           
            <StyledTableCell align="left"><b>Open Incidents</b></StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
             
              <TableCell align="left"> <div><img src={getSeverityIcon(row.severity)} style={{ width:"23px",top:"3px",position:"relative",cursor:"pointer"}} />&nbsp;&nbsp; <span style={{position:"relative",top:"-3px"}}><Moment format="DD/MM/YY &nbsp;&nbsp;HH:mm:ss" unix tz="Asia/Jerusalem">{row.startTimestamp/1000}</Moment>&nbsp;&nbsp;&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp; {row.description}</span></div></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
        </Wrapper>
    )

}

export default Table1