//Popup Modal
$('.open').on('click', function (e) {
	e.preventDefault();
	/* $('.popup').css('display','block'); */
	$('.popup').show();
	// $('.overlay').addClass('open');
});
$('.close').on('click', function (e) {
	e.preventDefault();
	$('.popup').hide();
	// $('.overlay').removeClass('open');
});

//전체 메뉴
$('.tap').on('click', function (e) {
	e.preventDefault();
	/* $('.popup').css('display','block'); */
	$('.allmenu').show();
	// $('.overlay').addClass('open');
});
$('.tapclose').on('click', function (e) {
	e.preventDefault();
	$('.allmenu').hide();
	// $('.overlay').removeClass('open');
});

$('.taste_box').bxSlider({
	slideWidth: 250,
	minSlides: 3,
	maxSlides: 6,
	moveSlides: 1,
	slideMargin: 10,
	infiniteLoop: true,
	auto: true,
});
