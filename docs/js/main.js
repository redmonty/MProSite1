(function(){
  AOS.init({
  duration: 1200,
  disable: window.innerWidth < 700
});

$('#mainForm').submit(function() {
  $.ajax({
    type: 'POST',
    url: '../mail.php',
    data: $(this).serialize()
  }).done(function(){
    alert('Спасибо за заявку! Скоро мы с Вами свяжемся');
  });
  return false;
});

$('#benefitsModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Новое сообщение по ' + recipient);

});
$('.modal-form').click(function(event) {
  alert('dafsgd')
  $('#benefitsModal').modal('hide');
  $.ajax({
    type: 'POST',
    url: 'mail.php',
    data: $(this).serialize()
  }).done(function(){
    // $('#benefitsModal').modal('hide');
    alert('Спасибо за заявку! Скоро мы с Вами свяжемся');
  });
  return false;
});
// var closeNav = $('.close_nav_btn').on('click',function(e){
//     $('.main_nav ul').toggle(500);
  
// });
})();
