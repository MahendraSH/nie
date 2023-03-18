const colorArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
const randomHeight = () => {
    const radHeight = Math.floor(Math.random() * (window.innerHeight - 100))
    // console.log(window.innerHeight)
    // console.log(radHeight)   
    return radHeight

}

const svg = d3.select('body')
    .append('svg')
    .attr('height', innerHeight)
    .attr('width', innerWidth)

let time = 0;
setInterval(() => {

    const n = 200 + Math.sin(time * 20) * 20;

    const data = d3.range(n).map(d => ({

        width: 15,
        x: d * 20,
        height: 10 + randomHeight() + Math.sin(time * 1) * d,

        colorName: colorArray[d % colorArray.length]
    }))


    svg
        .selectAll('rect')
        .data(data)
        .join("rect")
        .attr('width', (d) => d.width)
        .attr('x', (d) => d.x)
        .attr("height", (d) => d.height)
        .attr("fill", (d) => d.colorName)
        .attr("stroke", (d) => 'black')
        .attr('stroke-width', (d) => "5px")
    time += 0.001;
}, 10000 / 40)

