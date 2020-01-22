$(function() {
    $("input[name=register]").click(function() {
        if ($("#nome").val() != "" && $("#phone").val() != "" && $("#email").val() != "" && $("#password").val() != "") {
            if ($("#password").val() == $("#repeat_password").val())
                alert("DADOS:" + "\n" +
                    "Nome: " + $("#nome").val() + "\n" +
                    "Phone: " + $("#phone").val() + "\n" +
                    "Email: " + $("#email").val() + "\n" +
                    "Password: " + $("#password").val() + "\n" +
                    "Repeat Password: " + $("#repeat_password").val());
            else {
                alert("As senhas não correspondem!")
            }
        } else {
            alert("Preencha todos os campos!")
        }
    })


    $(document).ready(function() {
        $("#phone").mask("(00) 0 0000-0000");
    })
})