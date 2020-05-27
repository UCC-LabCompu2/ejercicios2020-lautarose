/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Funcion que convierte unidades, de metros, yardas, pulgadas y pies.
 * @method cambiarunidades
 * @param {string} id - el id de los inputs, metro, yarda, pie, pulgada.
 * @param {number} value - el valor que poseen los inputs metro, yarda, pie, pulgada.
 * @return
 */

function cambiarunidades(id , value){
    var metro , yarda , pulgada , pie;

    if(value.includes(",")){
        value = value.replace("," , ".");
    }

    if(isNaN(value)){
        alert("se ingreso un valor invalido en "+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }
    else{
        switch(id){
            case 'metro':
                metro = value;
                pulgada = 39.3701*value;
                pie = 3.28084*value;
                yarda = 1.09361*value;
                break;
            case 'pulgada':
                pulgada = value;
                metro =  0.0254*value;
                pie = 0.0833333*value;
                yarda = 0.0277778*value;
                break;
            case 'pie':
                pie = value;
                metro = 0.3048*value;
                pulgada = 12*value;
                yarda = 0.333333*value;
                break;
            case 'yarda':
                yarda = value;
                metro = 0.9144*value;
                pulgada = 36*value;
                pie = 3*value;
                break;
            default:
                break;
        }
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasunidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie*100)/100;
}

/**
 * Funcion que convierte grados a radianes o viceversa.
 * @method convertirGR
 * @param {string} id - el id de los inputs, grados o radianes.
 * @return
 */

function convertirGR(id) {
    var grad , rad;
    if(id === "grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }
    else if (id === "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * Funcion que muestra u oculta un div.
 * @method mostrar_ocultar
 * @param {string} id - el id de los inputs, val_mostrar(si esta seleccionado mostrar) val_ocultar(si esta seleccionado ocultar).
 * @return
 */

function mostrar_ocultar(valorMO) {
    if(valorMO == "val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }
    else if(valorMO == "val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }

}

/**
 * Funcion que suma dos numeros.
 * @method calcular_suma.
 * @param
 * @return
 */

function calcular_suma() {
    var num1 , num2;
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=(Number(num1)+Number(num2));
}

/**
 * Funcion que resta dos numeros.
 * @method calcular_resta.
 * @param
 * @return
 */

function calcular_resta() {
    var num1 , num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=(Number(num1)-Number(num2));
}

/**
 * Funcion que multiplica dos numeros.
 * @method calcular_mul.
 * @param
 * @return
 */

function calcular_mul() {
    var num1 , num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=(Number(num1)*Number(num2));
}

/**
 * Funcion que divide dos numeros.
 * @method calcular_div.
 * @param
 * @return
 */

function calcular_div() {
    var num1 , num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=(Number(num1)/Number(num2));
}

function cargar_web() {
    var cantidad , unidad , urlcomp;
    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(urlcomp);
}

function cargar_resultado() {
    var cantidad , unidad , urlcomp;
    urlcomp = window.location.href.split("/")[5];
    console.log(urlcomp);
    cantidad = urlcomp.split("#")[1];
    unidad = urlcomp.split("#")[2];
    document.getElementById("dist").value =" " + cantidad + " " + unidad;
}

function canvascircuad() {
 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");

 ctx.fillStyle=("#333899");

 var Ymax = canvas.height;
 var Xmax = canvas.width;
 var margin = 5;

 ctx.fillRect(margin,Ymax-40-margin,40,40);

 ctx.fillStyle=("#ffffff");
 ctx.arc(Xmax/2 , Ymax /2 , 20 , 0 , 2*Math.PI);
 ctx.stroke();
 ctx.fill();

}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvaspaint");
    var ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);

    canvas.onmousedown = function () {bandera = true;};
    canvas.onmouseup = function () {bandera = false;};

    if(bandera){
        ctx.fillRect(posX , posY , 5 ,5 );
        ctx.fill;
    }
}

function reiniciarcanvas(){
    var canvas = document.getElementById("canvaspaint");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadricula(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    //dibujar lineas horizontales
    ctx.beginPath();
    for(var i = 0 ; i < alturaMax ; i += 20){
        ctx.moveTo(0 , i);
        ctx.lineTo(anchoMax , i);
        ctx.strokeStyle = "#c6d9bf";
        ctx.stroke();
    }
    ctx.closePath();

    //dibujar lineas verticales
    ctx.beginPath();
    for(i = 0 ; i < anchoMax ; i += 20){
        ctx.moveTo(i , 0);
        ctx.lineTo(i , alturaMax);
        ctx.strokeStyle = "#c6d9bf";
        ctx.stroke();
    }
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo( 0 , alturaMax/2);
    ctx.lineTo(anchoMax , alturaMax/2);
    ctx.strokeStyle = "#d90706";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo( anchoMax/2 , 0);
    ctx.lineTo(anchoMax/2 , alturaMax);
    ctx.strokeStyle = "#d90706";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX , posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img , posX , posY);
    }
}

x=0;
dx=2;

function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img , x , 100);
    };

    if(x>canvas.width){
        x=0;
    }

    x+=dx;
}