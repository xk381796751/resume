!function() {
	var view = document.querySelector('#topNavBar')
	var controller = function(view) {
		window.addEventListener('scroll', function () {
			if (window.scrollY > 0) {
				view.classList.add('sticky')
			} else {
				view.classList.remove('sticky')
			}
		})
	}
	controller(view)
}.call()

