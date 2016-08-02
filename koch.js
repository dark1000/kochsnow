
//这是一个koch雪花分形的JS实现用的是递归的思想。
// coder tzf
window.onload=function(){

    var btn=document.getElementById("btn");

    btn.onclick=draw;




      function draw(){
       var canvas=document.getElementById("cantest");
       var ctx=canvas.getContext("2d");
       ctx.strokeStyle = "#000";
       fillBackground(canvas ,ctx);
            ctx.beginPath();

            var x1 = 400.00;
            var y1 = 150.00;

            var x2 = 100.00;
            var y2 = 150.00;


            var x11 = x2 + (x1 - x2) / 2;
            var y11 = y1 + Math.sin(Math.PI / 3) * (x1 - x2);

            var depth = parseInt(document.getElementById("txtDepth").value);  //取得一个文本框的值，可以调整维度，这里没有进行输入判断。

            koch(ctx, x1, y1, x2, y2, 0, depth);
            koch(ctx, x11, y11, x1, y1, 0, depth);
            koch(ctx, x2, y2, x11, y11, 0, depth);

      }

    function fillBackground(canvas , ctx){  //填充背景
        ctx.fillStyle="#fff";
        ctx.fillRect(0,0,500,500);

    }





      function koch(ctx, x1, y1, x2, y2, n, m){    //ctx为绘图对象，x1，y1,x2,y2为两头的点，n为当前维度，m为维度    
        if(m == 0){
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return false;
        }
        var x3 = (x2 - x1) / 3 + x1;
        var y3 = (y2 - y1) /3 + y1;
        var x4 = (x2 - x1) / 3 * 2 + x1;
        var y4 = (y2 - y1) / 3 * 2 + y1;
        var x5 = x3 + ((x2 - x1) - (y2 - y1) * Math.sqrt(3)) / 6;
        var y5 = y3 + ((x2 - x1) * Math.sqrt(3) + (y2 - y1)) / 6;

        n = n + 1;

        if(n == m){
            ctx.moveTo(x1, y1);
            ctx.lineTo(x3, y3);
            ctx.lineTo(x5, y5);
            ctx.lineTo(x4, y4);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return false;
        }

        koch(ctx, x1, y1, x3, y3, n, m)
        koch(ctx, x3, y3, x5, y5, n, m)
        koch(ctx, x5, y5, x4, y4, n, m)
        koch(ctx, x4, y4, x2, y2, n, m)
    }



   }