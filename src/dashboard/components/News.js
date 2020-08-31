import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Moment from 'react-moment';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Wrapper = styled.ul`
.news{
    position:absolute;
    top:423px;
    left:1080px;
    width:450px;
    height:469px;
    background-color:#fff;
    overflow: scroll;
  }

`

function News(props) {
    const [news,setNews]=useState([]);
    const sid=sessionStorage.getItem("sid")
    
    const getNews=event=>{
        console.log("getting news");
        const url="http://cloudapi.securegion.com/eddie/getNews?sid="+sid+"&size=7&page=0&sortBy=startTimestamp&sortDirection=desc";
     axios.get(url,{
  
     }).then((response)=>{
         console.log(response)
         //alert(response.data.data);
         if (response.data.data=="ERR SSN"){props.history.push("/login")}
         else {
            if (response==undefined){response.data.data.content=null}
            else {
                console.log(response.data.data)
               setNews(response.data.data);
  
            }
        }
     })
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: "#ff7544",
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);

    const handleClick=(e,id)=>{
        alert(id);
    }
    useEffect(()=>{
         getNews()
         let interval = null;
         interval = setInterval(() => {
            getNews()
            }, 5000);
    },[])
    return (
        <Wrapper>
           
                         <TableContainer component={Paper} className="news">
                       <Table className="table1" size="small">
                       <TableHead>
                       <TableRow className="row" >
                    
                       <StyledTableCell align="left"><b>Recent News</b></StyledTableCell>
                       </TableRow>
                       </TableHead>
                       <TableBody >

                        {news!=null ?
                       news.slice(0,10).map(row => (
                           <TableRow className="row" hover key={row.username}  selected={false}   onClick={event => handleClick(event, row.username)}>
                            
                            <TableCell width="50%" align="left">{row.title}&nbsp;&nbsp;(<Moment fromNow>{row.timestamp}</Moment>)</TableCell>     
                           </TableRow>
                           ))
                           :<div/>
                        }
                           </TableBody>
                           
                       </Table>
                       </TableContainer>
                   

        </Wrapper>
    )

}

export default News