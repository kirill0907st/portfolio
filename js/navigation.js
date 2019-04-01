$(document).ready(function(){
	var navToggleButton = $('#nav-btn');
	var navToggleIcon = $('#nav-btn .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	navToggleButton.on('click',function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navBtn();
	});
	navLink.on('click',function(){
		if(navBlock.hasClass(navBlockOpen)){
			navBtn();
		}
		navBlock.removeClass(navBlockOpen);
	});
	function navBtn(){
		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	};
});