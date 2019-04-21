
var canvas = document.getElementById("canvas");
var ctx  = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var r = width / 2;
var rem = width / 200;

function drawBack() {
    ctx.save();
    ctx.translate(r,r);
    ctx.lineWidth = 5*rem;
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.arc(0,0,r - ctx.lineWidth /2,0,Math.PI*2,false);
    ctx.stroke();

    var hours = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = 18*rem+ "px Arial";
    ctx.fillStyle = "maroon ";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    hours.forEach(function (num,index) {
        var rad = 2*Math.PI / 12 * index;
        var x = Math.cos(rad) * (r-25*rem);
        var y = Math.sin(rad) * (r-25*rem);
        ctx.fillText(num,x,y);
    })

    for(var i = 1;i<=60;i++){
        var rad = 2*Math.PI / 60 * i;
        var x = Math.cos(rad) * (r-10*rem);
        var y = Math.sin(rad) * (r-10*rem);
        ctx.save();
        ctx.beginPath();
        if(i%5 == 0){
            ctx.fillStyle = "red";
            ctx.arc(x,y,3*rem,0,2*Math.PI,false);
        }else{
            ctx.fillStyle = "lightGrey";
            ctx.arc(x,y,3*rem,0,2*Math.PI,false);
        }
        ctx.fill();
        ctx.restore();
    }


}

function drawHour(hour,min,sec) {
    ctx.save();
    var rad = 2*Math.PI / 12 * hour;
    var mRad = 2*Math.PI / 12 / 60 * min;
    var sRad = 2*Math.PI / 12 / 60 /60 * sec;
    ctx.rotate(rad + mRad + sRad);
    ctx.strokeStyle="black";
    ctx.lineWidth= 5*rem ;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0,5*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();
}

function drawMin(min,sec) {
    ctx.save();
    var rad = 2*Math.PI / 60 * min;
    var sRad = 2*Math.PI / 60 /60 * sec;
    ctx.rotate(rad+sRad);
    ctx.strokeStyle="blue";
    ctx.lineWidth= 4*rem ;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0,6*rem);
    ctx.lineTo(0,-(r-35*rem));
    ctx.stroke();
    ctx.restore();
}

function drawSec(sec) {
    ctx.save();
    var rad = 2*Math.PI / 60 * sec;
    ctx.rotate(rad);
    ctx.fillStyle="green";
    ctx.lineWidth= 3*rem ;
    ctx.lineCap = "round";
    ctx.beginPath();

    //绘制一个下面宽上面窄的闭合图形
    ctx.moveTo(-2*rem,15*rem);
    ctx.lineTo(2*rem,15*rem);
    ctx.lineTo(1*rem,-r+18*rem);
    ctx.lineTo(-1*rem,-r+18*rem)
    ctx.fill();
    ctx.restore();
}

function drawDot() {
    ctx.save();
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(0,0,3*rem,0,2*Math.PI,false);
    ctx.fill();
    ctx.restore();
}

function clock(hour,min,sec) {
    ctx.clearRect(0,0,width,height);
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    drawBack();
    drawMin(min,sec);
    drawHour(hour,min,sec);
    drawSec(sec);
    drawDot();
    ctx.restore();
}
clock();
setInterval(clock,1000);


