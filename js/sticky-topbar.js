!function() {
	var view = document.querySelector('#topNavBar')
	var controller = {
		view: null,
		init : function(view) {
			this.view = view
			this.bindEvents() 
			// 等价于this.bindEvents.call(this)
		},
		bindEvents: function() {
			var view = this.view
			// 箭头函数内外this不变
			window.addEventListener('scroll', (e) => {
				if (window.scrollY > 0) {
					this.active()
				} else {
					this.deactive()
				}
			})
		},
		active: function() {
			this.view.classList.add('sticky')
		},
		deactive: function() {
			this.view.classList.remove('sticky')
		}
	}
	controller.init(view) 
	// 等价于controller.init.call(controller, view)
}.call()

