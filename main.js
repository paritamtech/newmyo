$(document).ready(function() {
  // Login form submission
  $('#login-form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    if (username === 'aiims_1' && password === 'Aiims#212') {
      $('#login-container').addClass('d-none');
      $('#app-container').removeClass('d-none');
    } else {
      alert('Invalid username or password');
    }
  });

  // Questionnaire form submission
  $('#questionnaire').submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($('input[name="q1"]:checked').val());
    var q2 = parseInt($('input[name="q2"]:checked').val());
    var q3 = parseInt($('input[name="q3"]:checked').val());
    var q4 = parseInt($('input[name="q4"]:checked').val());
    var q5 = parseInt($('input[name="q5"]:checked').val());

    var sum = q1 + q2 + q3 + q4 + q5;
    var resultText;
    var resultCardClass;

    if (sum > 5) {
      resultText = 'DEFINITE';
      resultCardClass = 'definite';
    } else if (sum > 3 && sum < 6) {
      resultText = 'PROBABLE';
      resultCardClass = 'probable';
    } else {
      resultText = 'UNLIKELY';
      resultCardClass = 'unlikely';
    }

    $('#summary').html(`
      MRI - ${$('input[name="q1"]:checked').parent().text()}<br>
      DOTA - ${$('input[name="q2"]:checked').parent().text()}<br>
      EMBX - ${$('input[name="q3"]:checked').parent().text()}<br>
      CRP - ${$('input[name="q4"]:checked').parent().text()}<br>
      CPAIN - ${$('input[name="q5"]:checked').parent().text()}
    `);

    $('#result-text').text(`As per the observations, there is a ${resultText.toUpperCase()} possibility of Myocarditis.`);
    $('#result-card').addClass(resultCardClass);
    $('#app-container').addClass('d-none');
    $('#result-container').removeClass('d-none');
  });

  // Reset button
  $('#reset-btn').click(function() {
    $('#questionnaire')[0].reset();
    $('#result-container').addClass('d-none');
    $('#app-container').removeClass('d-none');
    $('#result-card').removeClass('definite probable unlikely');
  });

  // Logout button
  $('#logout-btn').click(function() {
    $('#app-container').addClass('d-none');
    $('#login-container').removeClass('d-none');
    $('#result-container').addClass('d-none');
  });

  // Submit Again button
  $('#submit-again').click(function() {
    $('#result-container').addClass('d-none');
    $('#app-container').removeClass('d-none');
  });
});