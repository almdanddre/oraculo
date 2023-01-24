var questions = [{id:'1', question: 'exercicios/merge-invertido.py'}, 
                {id:'2', question: 'exercicios/calcula-triplo.py'},
                {id:'3', question: 'exercicios/crescente-decrescente.py'},
                {id:'4', question: 'exercicios/numeros-positivos.py'},
                {id:'5', question: 'exercicios/impares-consecutivos.py'},
                {id:'6', question: 'exercicios/idade-em-dias.py'}];
                

$(document).ready(function () {
    $("#submit").click(function () {
        for(i = 0; i < questions.length; i++) {
            if(questions[i].id == $("#problema").val()) {
              quest = questions[i].question;
            }
        }
        $.post("/problems",
        {
            id: $("#problema").val(),
            question: quest,
            entrada1: $("#entrada1").val(),
            entrada2: $("#entrada2").val(),
            saida: $("#saida").val()
        },
        function (data, status) {
            $("#comparacao").val(data);
        });
        
        
    });
});

$(document).ready(function () {
    $("#submit2").click(function () {
        for(i = 0; i < questions.length; i++) {
            if(questions[i].id == $("#problema2").val()) {
              quest = questions[i].question;
            }
        }
        $.post("/problems",
            {
                id: $("#problema2").val(),
                question: quest,
                entrada1: $("#entrada-simples").val(),
                saida: $("#saida-simples").val()
            },
            function (data, status) {
                $("#comparacao2").val(data);
            });
    });
});


$(document).ready(function () {
    $("#reset1").click(function(){
        $("#entrada1").val('');
        $("#entrada2").val('');
        $("#saida").val('');
        $("#comparacao").val('');
    });
});

$(document).ready(function () {
    $("#reset2").click(function(){
        $("#entrada-simples").val('');
        $("#saida-simples").val('');
        $("#comparacao2").val('');
    });
});