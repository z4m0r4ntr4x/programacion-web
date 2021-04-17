$(document).ready(function(){
    //botos saludo
    $("#btn1").on('click', function(){
        let saludo="Hola "+ $("#nombre").val();
        alert(saludo);
    });
    //boton mensaje
    $("#btn2").on('click', function(){
        let saludo="Hola "+ $("#nombre").val();
        $("#mensaje").html(saludo);
    });
    //boton formulario
    $("#form1").validate({
        lang:'es',
        rules:{
            nombre:{
                required:true
            },
            edad:{
                required:true,
                number:true
            }
        }
    });
});