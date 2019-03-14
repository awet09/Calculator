
$(".calc-btn").on('click',function(){
  if($(this).attr('data-role')!='operator'){
    $(".display").val($(".display").val()+$(this).val());
  }
  else{
    if($(".display").val()!=''){
      $(".display").val($(".display").val()+$(this).val());
    }
  }
});

$(".clear-btn").on('click',function(){
  $(".display").val('');
});


$(".calculate-btn").on('click',function(){
  var expression = $(".display").val();
  $(".display").val(eval(expression));
});

