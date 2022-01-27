$(function() {
  var one = 0;
  var ten = 0;
  var hundred = 0;
  var thousand = 0;
  
  var timer;
  
  // スタート
  $('#start').click(function() {
    timer = setInterval(countup, 100);
    
    $(this).prop('disabled', true);
    $('#stop, #reset').prop('disabled', false);
  });
  
  // ストップ
  $('#stop').click(function() {
    
    clearInterval(timer)
    
    $(this).prop('disabled', true);
    $('#start, #reset').prop('disabled', false);
  });
  
  // リセット
  $('#reset').click(function() {
    one = 0;
    ten = 0;
    hundred = 0;
    thousand = 0;
    $('#clock').html('0:0:0:0');
    clearInterval(timer);
    
    $('#stop, #reset').prop('disabled', true);
    $('#start').prop('disabled', false);
  });
  
  
  function countup() {
    one += 1;
    
    if (one > 9) {
      one = 0;
      ten += 1;
    }
    if (ten > 9) {
      ten = 0;
      hundred += 1;
    }
    if (hundred > 9) {
      hundred = 0;
      thousand += 1;
    }
    
    $('#clock').html(thousand + ":" + hundred + ":" + ten + ":" + one);
  }
  
});