import React, { useRef, useState, useEffect } from 'react';
import HistogramChart from "./HistogramChart";

const Histogram = (props) => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if(!chart) {
            setChart(new HistogramChart(chartArea.current, props))
        }
        else{
            chart.update()
        }
    }, [chart, props])
    return (
        <div className="chart-area" ref={chartArea}></div>
    )
}

export default Histogram