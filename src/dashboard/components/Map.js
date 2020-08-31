import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import {HorizontalBar} from 'react-chartjs-2';
import Chart from 'react-google-charts'

import axios from 'axios';


const Wrapper = styled.ul`
.chart1a{
  position:absolute;
  left:80px;
  top:70px;
  width:500px;
  height:180px;
  
  
}

.incidentTitle1{
  position:absolute;
  top:25px;
  left:105px;
  width:350px;
  height:70px;
  background-color:#FC930B;
  color:white;
  z-index:10;
}

`

function Map(props){

    const [labels1,setLabels1]=useState([]);
    const [values1,setValues1]=useState([]);
    const [data,setData]=useState([]);

    {/*var data={
        labels: {labels1},
        series:[{values1}]
    };*/}

    const data1 = {
      labels: labels1,
      datasets: [
        {          
          label: 'Actions(24h)',
          backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
          data: values1
        }
      ], 
    };
      
    const get1=event=>{
        var date=new Date()
        var fromDate=new Date()
        fromDate.setDate(fromDate.getDate() - 1);
        //const url=window.$url+"/eddie/countByFieldAndRange?sid=1&field=action&from="+fromDate.getTime()+"&to="+date.getTime()+"&topSize=5";
        const url=window.$url+"/eddie/newtest";
        
        axios.get(url,{
         }).then((response)=>{
            if (response.data.data!=undefined){ 
                console.log(response.data.data);
                //alert(response.data.data)
               
                var o=JSON.parse(response.data.data)
                setData(o)
                var dict = {};
               
                var barr=[];
                var i=0;
                o.forEach(function(obj) { 
                var arr=[];
                 //dict[obj.key]=obj.doc_count; 
                 arr.push(obj.key)
                 arr.push(obj.doc_count)
                 barr.push(arr)
                 i++
                });
                //alert(barr[0])
                setData(barr);
               
                //alert(barr)
                var x=[
                  ['Task1', 'Hours per Day'],
                  
                  
                  ['USB Drive Blocked', 8],
                  ['HTTPS WebDAV Large Body DoS', 4],
                  ['Full Connect Port Scan', 2],
                  ['RDP Logged in', 1],
                  
                ]
                setData(x);
                //for(var key in dict) {
                //  var value = dict[key];
                //  alert(key+"  "+value);
                //}
            }      
         })
     }

    useEffect(()=>{
        get1() 
            
    },[])
    return (
        <Wrapper>
           
           <div style={{position:"absolute",top:"10px",left:"570px",width:"33%"}}>
           <div style={{color:"black"}}>
           <div></div>

           </div>
           <Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Attacks'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 4000],
    ['Canada', 5000],
    ['France', 600],
    ['Uganda',20000],
    ['Russia',50000],
    ['China', 100000],
  ]}
  options={{
    colorAxis: { colors: ['#fff700', 'red', '#a30000'] },
    backgroundColor: '#1c1c1c',
    datalessRegionColor:'#555555'
  }}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>
      
          </div>
       
        </Wrapper>
    )

}

export default Map