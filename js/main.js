$('#add-skill').on('click', function(evt){
    let mylist = $('#input').val();
    $('#list').append('<li>'+mylist+'</li>');
});

