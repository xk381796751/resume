window.Model = function (options) {
	let resourceName = options.resourceName
	return {
		init: function () {
			var APP_ID = 'mvs3vaHD9Sbn2shwaI1QyXWT-gzGzoHsz'
			var APP_KEY = 'UzR0qYsCdcKmIbAmdJNp3vOC'
			AV.init({ appId: APP_ID, appKey: APP_KEY })
		},
		// 获取数据
		fetch: function () {
			var query = new AV.Query(resourceName);
			return query.find() // Promise对象
		},

		// 创建数据
		save: function (object) {
			var Message = AV.Object.extend(resourceName);
			var message = new Message();
			return message.save(object) // Promise对象
		}
	}
}