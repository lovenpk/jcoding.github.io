$(()=>{
	$('.menu-icon').click(()=>{
		$('.menu-icon > span').toggleClass('on');
		$('.menu-icon').toggleClass('on');
		$('.menu-cntr').toggleClass('on');
	});
});