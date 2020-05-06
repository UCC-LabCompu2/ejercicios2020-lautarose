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
    if(isNaN(value)){
        alert("se ingreso un valor invalido");
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }
    else{
        switch(id){
            case 'metro':
                document.lasunidades.unid_pulgada.value = 39.3701*value;
                document.lasunidades.unid_pie.value = 3.28084*value;
                document.lasunidades.unid_yarda.value = 1.09361*value;
                break;
            case 'pulgada':
                document.lasunidades.unid_metro.value =  0.0254*value;
                document.lasunidades.unid_pie.value = 0.0833333*value;
                document.lasunidades.unid_yarda.value = 0.0277778*value;
                break;
            case 'pie':
                document.lasunidades.unid_metro.value = 0.3048*value;
                document.lasunidades.unid_pulgada.value = 12*value;
                document.lasunidades.unid_yarda.value = 0.333333*value;
                break;
            case 'yarda':
                document.lasunidades.unid_metro.value = 0.9144*value;
                document.lasunidades.unid_pulgada.value = 36*value;
                document.lasunidades.unid_pie.value = 3*value;
                break;
            default:
                break;
        }
    }
}

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