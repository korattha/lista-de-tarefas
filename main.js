$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        let novaTarefa = $('#nova-tarefa').val().trim(); 
        novaTarefa = novaTarefa.toLowerCase().replace(/\b\w/g, function(match) {
            return match.toUpperCase();
        }); 
        if (novaTarefa !== '') { 
            const novaLinha = $('<li class="tarefa"></li>').text(novaTarefa);
            $('#tarefas-list').append(novaLinha);
            $('#nova-tarefa').val('');
        } else {
            alert('Por favor, insira uma tarefa válida.'); 
        }
    });

    $('#tarefas-list').on('click', 'li', function() {
        $(this).toggleClass('riscada');
    });
});