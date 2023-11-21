$(function() {
    $('#change-color').on('click', function(){
      $('#target').css('color', 'red');
    });
  });

  $(function() {
    $('#change-text').on('click', function(){
    const p = $('#target').text();
    $('#target').text('Hello!');
 })
});

$(function () {
    $('#fade-out').on('click', function() {
      $('#target').fadeOut();
    });
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });