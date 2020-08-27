import * as d3 from 'd3';
import tip from "d3-tip";

import './histogram-styles.css';
import './tooltip-styles.css';

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10}
let WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
let HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class HistogramChart{
    constructor(element, props) {

        // width and height configuration
        if(props.width){
            WIDTH = props.width - MARGIN.LEFT - MARGIN.RIGHT;
        }

        if(props.height) {
            HEIGHT = props.height - MARGIN.LEFT - MARGIN.RIGHT;
        }
             
        // adding svg element
        const svg = d3.select(element)
            .append("svg")
                .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
                .attr("height", HEIGHT+ MARGIN.TOP + MARGIN.BOTTOM)
            .append("g")
                .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

        // converting dictionary data to list
        const data = Object.entries(props.data);

        // defining scales for x and y axis
        const y = d3.scaleLinear()
            .domain([
                d3.min(data, d => d[1]) * 0.95, 
                d3.max(data, d => d[1])])
            .range([HEIGHT, 0]);

        const x = d3.scaleBand()
            .domain(data.map(d => d[0]))
            .range([0, WIDTH])
            .padding(0.4);

        // defining axis generators
        const xAxisCall = d3.axisBottom(x);
        svg.append("g")
            .attr("transform", `translate(0, ${HEIGHT})`)
            .attr("class", "text-axis")
            .call(xAxisCall);

        const yAxisCall = d3.axisLeft(y);
        svg.append("g")
            .attr("class", "text-axis")
            .call(yAxisCall);

        // adding labels
        svg.append("text")
            .attr("class", "chart-label")
            .attr("x", WIDTH / 2)
            .attr("y", HEIGHT + 50)
            .attr("text-anchor", "middle")
            .text(props.xlabel);
            
        svg.append("text")
            .attr("class", "chart-label")
            .attr("x", -(HEIGHT / 2))
            .attr("y", -50)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text(props.ylabel);

        // defining tooltip
        let tooltip = tip().attr('class', 'd3-tip').html(function(d) { 
            const key_value = d.srcElement.__data__;
            let text = `<span class="tooltip-text">${key_value[0]}:</span> <span class="tooltip-text">${key_value[1]}</span>`;
            return text;
        });
        svg.call(tooltip)

        const rects = svg.selectAll("rect")
            .data(data);

                    
        // chart bars
        rects.enter()
            .append("rect")
                .attr("class", "bar")
                .attr("x", (d, i) => x(d[0]))
                .attr("y", d => y(d[1]))
                .attr("width", x.bandwidth)
                .attr("height", d => HEIGHT - y(d[1]))
                .attr("fill", "steelblue")                
                .on('mouseover', tooltip.show)
                .on('mouseout', tooltip.hide)  
                .on('click', function() {
                    d3.select(this).classed("bar-selected", 
                        d3.select(this).classed("bar-selected") ? false : true);
                });      
    }

    update(){

    }
}