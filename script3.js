var MyCanvas=document.getElementById("MyCanvas");
var ctx=MyCanvas.getContext("2d");
var fillStyle;
var StrokeStyle;
// input1.onclick=function(){
//     fillStyle=input1.value;
// }
// input2.onclick=function(){
//     StrokeStyle=input2.value;
// }
var clicked;
MyCanvas.onmousedown=function(){
    clicked=true
}
MyCanvas.onmouseup=function(){
    clicked=false
}
var x;
var y;

var oper="";
btn1.onclick=function(){
    oper="draw";
    x(oper);

}
btn2.onclick=function(){
    oper="line";
    x(oper);
}
btn3.onclick=function(){

}
btn4.onclick=function(){

}
btn5.onclick=function(){
    oper="clear";
    x(oper);

}
function x(oper){
    switch(oper){
        case "draw":
            MyCanvas.onmousemove=function(e){
                if(clicked){
                    ctx.beginPath()
                    ctx.arc(e.offsetX,e.offsetY,5,0,2*Math.PI)
                    ctx.fill()
                    ctx.fillStyle=input1.value;
                    ctx.closePath();
                }
            }
            break;
        case "clear":
            MyCanvas.onmousemove=function(e){
                if(clicked){
                    ctx.beginPath()
                    ctx.clearRect(e.offsetX,e.offsetY,30,30)
                    ctx.closePath()
                }
            }
            break;
        case "line":
            
            // MyCanvas.onclick=function(e){
                
            //     ctx.moveTo(e.offsetX,e.offsetY);
               
            // }
            MyCanvas.onmousemove=function(e){
                ctx.beginPath();
                ctx.moveTo(e.offsetX,e.offsetY);
                ctx.lineTo(e.offsetX,e.offsetY)
                ctx.stroke();
                ctx.lineWidth=10
                ctx.closePath();
            }

            break;
            // MyCanvas.onmousemove=function(e){
            //     if(clicked){
            //         ctx.beginPath()
            //         ctx.moveTo(e.offsetX,e.offsetY);
            //         ctx.lineTo(e.offsetX,e.offsetY);
            //         ctx.stroke();
            //         ctx.lineWidth=10
            //         ctx.closePath()
                    
            //     }
            // }


    }

}