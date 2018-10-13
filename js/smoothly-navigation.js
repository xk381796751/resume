!function () {
	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}
	requestAnimationFrame(animate);

	var aTags = document.querySelectorAll('nav.menu > ul > li > a')
	for (let index = 0; index < aTags.length; index++) {
		aTags[index].onclick = function (e) {
			e.preventDefault(); // 阻止a标签的默认动作，即跳转锚点
			let a = e.currentTarget
			let href = a.getAttribute('href')
			let element = document.querySelector(href)
			let top = element.offsetTop
			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop // 路程
			var coords = { y: currentTop }; // 起始位置
			var t = Math.abs((s / 100) * 300) // 时间
			if (t > 500) { t = 500 }
			var tween = new TWEEN.Tween(coords) // 起始位置
				.to({ y: targetTop }, t) // 结束位置 和 时间
				.easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
				.onUpdate(function () {
					// coords.y 已经变了
					window.scrollTo(0, coords.y) // 如何更新界面
				})
				.start(); // 开始缓动
		}
	}
}.call()

