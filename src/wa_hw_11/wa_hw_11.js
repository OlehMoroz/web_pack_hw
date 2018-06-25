import './wa_hw_11.scss'

$('.accordion_title').next().hide();
	$('.accordion_title').click(function(){
	$(this).next().slideToggle(1000);
	$('.accordion_title').not(this).next().stop(true,true).slideUp(1000);
});