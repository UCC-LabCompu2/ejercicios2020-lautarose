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
    document.getElementsByName("sum_total")[0].value=(Number(num1)+Number(num2));
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
    document.getElementsByName("res_total")[0].value=(Number(num1)-Number(num2));
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
    document.getElementsByName("mul_total")[0].value=(Number(num1)*Number(num2));
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
    document.getElementsByName("div_total")[0].value= (Number(num1)/Number(num2));
}

