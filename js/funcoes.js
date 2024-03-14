function minhaFuncao1() {
    $('.btn-danger').empty().append('RAPHAEL SALES');
    $('.btn-danger').css({

        color:'#00ff00',
        textTransform:'uppercase',
        width: '70%'
    });

};

function minhaFuncao2() {
    $('#area-mensagens').empty();
    var alunos = ['aluno 01', 'aluno 02', 'aluno 03', 'aluno 04', 'aluno 05'];

    $.each(alunos, function(index, value) {
        $('#area-mensagens').append(value);
    });     
    
}