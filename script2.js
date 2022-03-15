var shape="";
var MySVG=document.getElementById("SVG");

btn1.onclick=function(e){
    Shape("circle");
}
btn2.onclick=function(){
    Shape("rec")
}
btn3.onclick=function(){
    Shape("line");
}
function Shape(S){
    switch (S){
        case "circle":
            MySVG.onclick=function(e){
                var Circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                Circle.setAttribute("cx",e.offsetX);
                Circle.setAttribute("cy",e.offsetY);
                Circle.setAttribute("r","50");
                Circle.setAttribute("fill","orange");
                MySVG.appendChild(Circle);
            }
            break;
        case "rec":
            MySVG.onclick=function(e){
                var rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rectangle.setAttribute("x",e.offsetX-50);
                rectangle.setAttribute("y",e.offsetY-50);
                rectangle.setAttribute("width","100");
                rectangle.setAttribute("height","100");
                rectangle.setAttribute("fill","black");
                MySVG.appendChild(rectangle);
            }
            break;
        case "line":
            MySVG.onclick=function(e){
                var Line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                Line.setAttribute("d","M"+(e.offsetX-25)+" "+(e.offsetY-25)+" L"+(e.offsetX+50)+" "+(e.offsetY+50));
                Line.setAttribute("stroke","blue");
                MySVG.appendChild(Line);
            }
            break;

    }
}
