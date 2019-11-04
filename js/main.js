

$('#add-skill').on('click', function(evt){
    let mylist = $('#input').val();
    $('#list').append('<li><button>X</button>'+' '+mylist+'</li>');
    $('#input').val('');
    return false;
});

$('ul').on('click', 'button', function(){
    $(this).closest('li').remove();
});
