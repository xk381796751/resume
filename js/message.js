!function () {
	var view = document.querySelector('section.message')
	var model = {
		init: function () {
			var APP_ID = 'mvs3vaHD9Sbn2shwaI1QyXWT-gzGzoHsz'
			var APP_KEY = 'UzR0qYsCdcKmIbAmdJNp3vOC'
			AV.init({ appId: APP_ID, appKey: APP_KEY })
		},
		// 获取数据
		fetch: function () {
			var query = new AV.Query('Message');
			return query.find() // Promise对象
		},	

		// 创建数据
		save: function (name, content) {
			var Message = AV.Object.extend('Message');
			var message = new Message();
			return message.save({ // Promise对象
				name: name,
				content: content
			})
		}
	}


	var controller = {
		view: null,
		model: null,
		messageList: null,
		form: null,
		init: function (view, model) {
			this.view = view,
			this.model = model
			this.messageList = view.querySelector('#messageList'),
			this.form = view.querySelector('#postMessageForm'),
			this.model.init(),
			this.loadMessages(),
			this.bindEvents()
		},
		
		loadMessages: function () {
			this.model.fetch().then((messages) => {
				let arr = messages.map((item) => item.attributes)
				arr.forEach((item) => {
					let li = document.createElement('li')
					li.innerText = `${item.name}: ${item.content}`
					this.messageList.appendChild(li)
				});
			})
		},
		bindEvents: function () {
			this.form.addEventListener('submit', function (e) {
				e.preventDefault()
				this.saveMessage()
			}.bind(this))
		},
		saveMessage: function () {
			let myForm = this.form
			let name = myForm.querySelector('input[name="name"]').value
			let content = myForm.querySelector('input[name="content"]').value
			if (!name || !content) {
				document.querySelector('section p').classList.add('notice')
			} else { 
				document.querySelector('section p').classList.remove('notice')
				this.model.save(name, content).then(function (object) {
					let li = document.createElement('li')
					li.innerText = `${object.attributes.name}: ${object.attributes.content}`
					this.messageList.appendChild(li)
					myForm.querySelector('input[name="name"]').value = ''
					myForm.querySelector('input[name="content"]').value = ''
					console.log(object);
				})
			}
			
		}
	}
	controller.init(view, model) 

}.call()







