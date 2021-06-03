$(function() {
  var $form = $('#staticform');
  $form.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://api.staticforms.xyz/submit',
      type: 'POST',
      dataType: 'json',
      data: $form.serialize(),
      success: function(result) {
        alert(JSON.parse(result));
      },
      error: function(xhr, resp, text) {
        alert(xhr, resp, text);
      }
    })
  });
});
