const colorArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

const randomColor= () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

const svg=d3.select('body')
.append('svg')
.attr('height',innerHeight)
.attr('width',innerWidth)

let time =0;
setInterval(()=>{

    const n= 15+Math.sin(time *0.4)*20;
    
const data =d3.range(n).map( d=>({
    
    x:200+Math.sin(d*0.5+time)*190+30 ,
    y:d* 60+30,

    r: Math.abs(5 + Math.sin(time) * d),
    // http://127.0.0.1:5500/d3/sine%20wave/sineWave-2/index.js
    

   colorName: colorArray[d%colorArray.length]
}))


svg
.selectAll('circle')
.data(data)
.join("circle")
.attr('r',(d)=>d.r)
.attr('cy',(d)=>d.x )
.attr('cx',(d)=> d.y)
.attr("fill",(d)=>d.colorName)
.attr('stroke',(d)=>'white')
time +=0.01;
},1000/40)

