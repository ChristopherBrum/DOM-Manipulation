$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $char = $("#key").val();

    $(document).off('keypress').on('keypress', function(event) {
      if ($char !== event.key) return;
      
      $('a').trigger('click');
    });
  });

  $('a').on('click', function(event) {
    event.preventDefault();
    $('#accordion').slideToggle();
  });
})