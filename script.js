$(document).ready(function () {
    $(function(){
        $("#miformulario").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: "required",
                password2: {
                    required: true,
                }
            },
            messages: {
                email: {
                    required: 'Ingresa tu correo electrónico',
                    email: 'Formato de correo no válido'
                },
                password: {
                    required: 'Ingresa una contraseña',
                    minlength: 'Largo insuficiente'
                }
            }
        });
    });
});