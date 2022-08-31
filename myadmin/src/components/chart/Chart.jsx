import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
// import { useMemo,useState,useEffect } from 'react';
// import {userRequest} from "../../requestMethods";

export const Chart = ({title, data, dataKey, grid}) => {
  
// console.log(userStats);
  return (
    <div className='chart'>
        <h3 className='chartTitle'> {title}</h3>
       <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
        <Tooltip/>
            {/* <YAxis/> */}
        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray= "5 5"/>}
            <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
            {/* <Legend/> */}
        </LineChart>
        </ResponsiveContainer> 
    </div>
  )
}
