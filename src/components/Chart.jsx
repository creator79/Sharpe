/* eslint-disable no-undef */
import React from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,

} from 'recharts';

function Chart({ chart, table, lineChartData, radialBarData }) {
  // console.log('chart', chart);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' ,marginBottom:'20px'}}>
      {/* Pie Chart */}
      <div style={{ width: '30%' }}>
        <PieChart width={300} height={300}>
          {/* Add Pie components as needed */}
          <Pie data={table} dataKey="userId" nameKey="count" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie
            data={chart}
            dataKey="userId"
            nameKey="count"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>

      {/* Line Chart */}
      <div style={{ width: '30%', marginTop:'2rem' }}>
      <LineChart width={400} height={250} data={chart}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="userId" stroke="#8884d8" />
  <Line type="monotone" dataKey="count" stroke="#82ca9d" />
</LineChart>
      </div>

      {/* Radial Bar Chart */}
      <div style={{ width: '30%' }}>
        <RadialBarChart width={300} height={300} innerRadius="10%" outerRadius="80%" data={chart} startAngle={180} endAngle={0}  nameKey="count"  fill="#fdf0d5">
          {/* Add RadialBar component as needed */}
          <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='userId'  fill="#82ca9d"/>
          <Tooltip />
        </RadialBarChart>
      </div>
    </div>
  );
}

export default Chart;
