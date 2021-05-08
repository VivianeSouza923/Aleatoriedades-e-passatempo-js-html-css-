//$(selector).ação();

// o docmento já está pronto?
/*
$(document).ready(function() {
    //o clique no botão
    $('button').click(function() {
        //vai esconder o que eu coloquei no h1
        $('h1').hide();
    });
});*/


// forma mais simplificada de verificar se o documento tá pronto
/*
$(function() {
    //o clique no botão
    $('button').click(function() {
        //vai esconder o que eu coloquei no h1
        $('h1').hide();
    });
});*/

// usar o jquery para alterar o CSS

/* primeiro exemplo
$(function() {
    //o clique no botão
    $('button').click(function() {
        //vai mudar a cor do texto
        // ele vai receber dois valores entre "". o primeiro será o que eu quero mudar e o valor da mudança
        //$('h1').css("color", "purple");
        // aqui ele vai esconder só quem eu selecione com o id
        $('#yh').css("color", "green");
    });
}); */
/*
$(function() {
    $('#green').click(function() {
        $('p').css("color", "green");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        $('p').fadeOut();
        // vou aguardar 3 segundos
        $('p').delay(3000);
        //depois de esperar os 3 sehgundos, vou fazer reaparecer com o fadeIn
        $('p').fadeIn();
    })
    $('#pink').click(function() {
        $('p').css("background-color", "pink");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        $('p').fadeOut();
        $('p').delay(3000);
        // se eu quiser um reaparecimento mais suave posso colocar 'slow' dentro do fadeIn
        $('p').fadeIn('slow')
    });
}); */
/*
$(function() {
    $('#green').click(function() {
        $('p').css("color", "green");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        $('p').fadeOut();
        // vou aguardar 3 segundos
        $('p').delay(3000);
        //depois de esperar os 3 sehgundos, vou fazer reaparecer com o fadeIn
        $('p').fadeIn();
    })
    $('#pink').click(function() {
        $('p').css("background-color", "pink");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        // o fast indica que esse desaparecimento será mais rápido
        $('p').fadeOut('fast');
        $('p').delay(3000);
        // se eu quiser um reaparecimento mais rápida posso colocar 'fast' dentro do fadeIn
        $('p').fadeIn('fast')
    });
}); */
/*
$(function() {
    $('#green').click(function() {
        $('p').css("color", "green");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        $('p').fadeOut();
        // vou aguardar 3 segundos
        $('p').delay(3000);
        //depois de esperar os 3 sehgundos, vou fazer reaparecer com o fadeIn
        $('p').fadeIn();
    })
    $('#pink').click(function() {
        $('p').css("background-color", "pink");
        //o fadeout vai fazer desaparecer as mensagens contidas na div <p>
        $('p').fadeOut(4000);
        $('p').delay(3000);
        // se eu quiser um reaparecimento mais suave posso colocar 'slow' dentro do fadeIn
        // para este caso agora eu quero passar os segundos que eu quero que apareça
        $('p').fadeIn(5000)
    });
});*/

// gravar mensagens com jquery

$(function() {
    $('#green').click(function() {
        $('p').css("background-color", "green");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });

    $('#pink').click(function() {
        $('p').css("background-color", "pink");
        //$('#mensagem').text("cor alterada com sucesso");
        //$('#mensagem').css('color', 'pink');
        //$('#mensagem').css('border', '1px solid pink');
        //$('#mensagem').fadeOut(3000);
        // encadeamento dessas linhas para #mensagem em bloco:
        $('#mensagem').text("cor alterada com sucesso").css('color', 'pink').css('border', '1px solid pink').fadeOut(3000);
    });
});