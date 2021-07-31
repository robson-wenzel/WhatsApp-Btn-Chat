$('#btn-whats').click(function() {
    $('#box-whats').toggleClass('active');
    if($('#icon-whats').hasClass('fa fa-whatsapp')){
        $('#icon-whats').removeClass('fa fa-whatsapp');
        $('#icon-whats').addClass('fa fa-close');
    } else {
        $('#icon-whats').removeClass('fa fa-close');
        $('#icon-whats').addClass('fa fa-whatsapp');
    }
});