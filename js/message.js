!function () {
	var model = Model({ resourceName: 'Message' })

	var view = View('section.message')

	var controller = Controller({
		messageList: null,
		form: null,
		init: function (view, controller) {
			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('form')
			this.loadMessages()
			// object 上有这三个属性吗
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
				this.model.save({'name': name, 'content': content}).then(function (object) {
					let li = document.createElement('li')
					li.innerText = `${object.attributes.name}: ${object.attributes.content}`
					this.messageList.appendChild(li)
					myForm.querySelector('input[name="name"]').value = ''
					myForm.querySelector('input[name="content"]').value = ''
					console.log(object);
				})
			}

		}
	})
	controller.init(view, model)
}.call()







