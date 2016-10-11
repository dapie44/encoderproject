
$("#divname").keydown(function(e) {
   e.keyCode == 13
});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);

});

if ($("input:changed").val() == 'echo')
