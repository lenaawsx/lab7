$(document).ready(function() {
  console.log('jQuery готов к работе!');

  // Вкладки
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    const tabId = $(this).data('tab');
    $('#' + tabId).addClass('active');
  });

  // Плавная прокрутка
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 500);
  });

  // AJAX цитата по методичке
  $('#loadQuote').click(function() {
    $.get('http://api.quotable.io/random', function(data) {
      $('#quote p').text(data.content);
      $('#quote cite').text(data.author);
    });
  });

  // jQuery UI draggable
  $('#draggable').draggable();

  // jQuery UI datepicker
  $('#datepicker').datepicker();
});
