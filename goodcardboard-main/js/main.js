$(document).ready(function(){
	$('.header-contacts__button').on("click", function(){
		$('.overlay').show()
	});
	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});
});

$(document).ready(function(){
	$('.contacts-block__button').on("click", function(){
		$('.overlay').show()
	});
	$('.popup-close').on("click", function(){
		$('.overlay').hide();
	});
});

$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a')

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
});

$(document).ready(function(){
	$('.close-popup').on('click', function(){
		$('.overlay').hide();
	});
});

$('.popup-close').click(function() {
	$('.overlay-thankyou').fadeOut();
});

$(document).mouseup(function (e) {
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay-thankyou').fadeOut();
	}
});

