
const btn = document.getElementById('btn');
colors = ['red', 'yellow', 'pink', 'green', 'blue', 'orchid', 'steelblue']

function changeBackground (){
    let color = colors[Math.floor(Math.random()*7)]
    document.body.style.background = color;
    console.log(color);
    
    
    
}

btn.addEventListener('click', changeBackground);