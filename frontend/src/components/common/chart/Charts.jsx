import React from 'react'
import { ComposedChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts'
import './charts.css'

const Charts = ({ data, }) => {

    return <div className='charts'>
        <Chart stroke='#04aa6d' data={data} value='close' />
    </div>
}

const Chart = ({ stroke, data, }) => {

    var array = []
    if (data.Data && data.Data.length) {

        array = data.Data.map(item => {
            return {
                name: new Date(item.time * 1000).toLocaleDateString(),
                uv: item.close,
                pv: item.close,
                amt: item.close
            }
        })
    }

    return (
        <div className='chart'>
            <ComposedChart width={1500} height={750} data={array} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line dataKey="uv" stroke={stroke} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis domain={['dataMin - 0', 'dataMax + 0']} />
                <Tooltip />
            </ComposedChart>
        </div>
    )
}



export default Charts
