!function () {
	setInterval(function () {
		findClosestAndRemoveOffset()
	}, 500)

	// 添加 offset 类
	let specialTags = document.querySelectorAll('[data-x]')
	for (let i = 0; i < specialTags.length; i++) {
		specialTags[i].classList.add('offset')
	}

	window.addEventListener('scroll', function () {
		findClosestAndRemoveOffset()
	})



	// helper
	function findClosestAndRemoveOffset() {
		let specialTags = document.querySelectorAll('[data-x]')
		let minIndex = 0
		for (let i = 1; i < specialTags.length; i++) {
			if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
				minIndex = i
			}
		}
		// minIndex 就是里窗口顶部最近的元素
		specialTags[minIndex].classList.remove('offset')
		let id = specialTags[minIndex].id
		let a = document.querySelector('a[href="#' + id + '"]')
		let li = a.parentNode
		let brothersAndMe = li.parentNode.children
		for (let i = 0; i < brothersAndMe.length; i++) {
			brothersAndMe[i].classList.remove('highlight')
		}
		li.classList.add('highlight')
	}

	var liTags = document.querySelectorAll('nav.menu > ul > li')
	for (let index = 0; index < liTags.length; index++) {
		liTags[index].onmouseenter = function (e) {
			e.currentTarget.classList.add('active')
		}
		liTags[index].onmouseleave = function (e) {
			e.currentTarget.classList.remove('active')
		}
	}
}.call()
