document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var pesan = document.getElementById('pesan').value;

  var terimakasihMessage = 'Terima kasih atas pesan Anda, ' + nama + '!';

  document.getElementById('terimakasihMessage').innerHTML = terimakasihMessage;
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('terimakasihMessage').style.display = 'block';
});
