$(document).ready(function() {
	

$('input').keyup(function(){
	$('#userName').text(', '+$(this).val());
});



});