!function () {
	var view = document.querySelector('#mySlides')
	var controller = function (view) {
		var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
			// Optional parameters
			loop: true,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	}
	controller(view)
}.call()

