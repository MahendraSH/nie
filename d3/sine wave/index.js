
const svg=d3.select('body')
.append('svg')
.attr('height',innerHeight)
.attr('width',innerWidth)

let time =0;
setInterval(()=>{

    const n= 15+Math.sin(time *0.4)*20;
    
const data =d3.range(n).map( d=>({
    
    x:200+Math.sin(d*0.4+time)*190+30 ,
    y:d* 60+30,
    r: 5+Math.sin(time )*d
   
}))

svg
.selectAll('circle')
.data(data)
.join("circle")
.attr('r',(d)=>d.r)
.attr('cy',(d)=>d.x )
.attr('cx',(d)=> d.y);
time +=0.01;
},1000/40)

