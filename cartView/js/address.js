new Vue({
	el: "#address",
	data: {
		// 地址内容
		addresses: [
			{
				"userName": "师成杰",
				"streetName": "河南省郸城县",
				"tel": "12345678901",
				"isDefault": true,
				"isSelected": true
			},
			{
				"userName": "师成杰",
				"streetName": "河南省郸城县",
				"tel": "12345678902",
				"isDefault": false,
				"isSelected": false
			},
			{
				"userName": "师成杰",
				"streetName": "河南省郸城县",
				"tel": "12345678903",
				"isDefault": false,
				"isSelected": false
			},
			{
				"userName": "师成杰",
				"streetName": "河南省郸城县",
				"tel": "12345678904",
				"isDefault": false,
				"isSelected": false
			},
			{
				"userName": "师成杰",
				"streetName": "河南省郸城县",
				"tel": "12345678905",
				"isDefault": false,
				"isSelected": false
			}
		],

		// 设置头部购买流程
		progress: true,
		maskShow: false,
		addItems: {},
		deleteShow: false,
		editShow: false,
		addShow: false,
		deliverStandard: true,
		deliverHigher: false,
		more: true,
		less: false,
		addressBackUp: [],
		userName: '',
		streetName: '',
		tel: '',
		selectIndex: 0

	},
	mounted() {
		// 页面加载完成时先展示3个地址
		this.arrayData();
	},
	methods: {
		arrayData() {
			this.addressBackUp = this.addresses.slice(0, 3);
		},
		defaultChange(items) {
			// 这个地址设为默认地址的时候其他地址要取消默认地址状态
			// 并将这个地址排到第一位
			
			items.isDefault = true;
			items.isSelected = false;
			var index = this.addressBackUp.indexOf(items);
			this.addressBackUp.splice(index, 1);
			this.addressBackUp.unshift(items);
			this.addressBackUp.forEach(function (value, i) {
				if(i !== 0) {
					value.isDefault = false;
				}
			})
		},
		deleteAdd(items) {
			this.maskShow = true;
			this.deleteShow = true;
			this.addItems = items;
			items.isSelected = false;
		},
		confirmDelete() {
			var index = this.addresses.indexOf(this.addItems);
			this.addresses.splice(index, 1);
			// 如果此时是初始状态 more为true
			if(this.more) {
				this.addressBackUp = this.addresses.slice(0, 3);
			}
			// 如果此时是更多状态 但是已经删的少于四个
			if(this.less) {
				if(this.addressBackUp.length < 4) {
					this.less = false;
					this.more = true;
				}
			}
			this.maskShow = false;
			this.deleteShow = false;
		},
		// 点击编辑的时候拿到数组中的某一个对象（某一个地址）
		// 再取出来地址里面的值
		editClick(items) {
			this.maskShow = true;
			this.editShow = true; 
			items.isSelected = false; 
			this.addItems = items;
			// 保存一下此刻的值
			this.userName = this.addItems.userName;
			this.streetName = this.addItems.streetName;
			this.tel = this.addItems.tel;
		},
		// 确定编辑的时候把这个传过来的地址修改了
		// 然后把点击时取得的地址里的值清空
		confirmEdit() {
			if(this.addItems.userName !== undefined && this.addItems.streetName !== undefined && this.addItems.tel !== undefined) {
				this.maskShow = false;
				this.editShow = false;
			}else {
				alert('值不能为空');
			}
			this.userName = '';
			this.streetName = '';
			this.tel = '';
		},
		// 取消编辑地址的时候让现在的地址等于点击时候取得的地址
		// 再把取得的地址清空
		editDismiss() {
			// 如果点击取消 让assItems里的值为刚开始点击编辑时候的值
			this.addItems.userName = this.userName;
			this.addItems.streetName = this.streetName;
			this.addItems.tel = this.tel;

			this.userName = '';
			this.streetName = '';
			this.tel = '';

			this.maskShow = false;
			this.editShow = false;
		},
		addAddress() {
			this.maskShow = true;
			this.addShow = true;
		},
		// 确认添加地址的时候 如果不为空 定义一个地址 push到数组中 再把地址清空
		confirmAdd() {
			if(this.userName.trim() !== '' && this.streetName.trim() !== '' && this.tel.trim() !== '') {
				// 把写入的值添加到地址数组中
				var items = {
					"userName": this.userName,
					"streetName": this.streetName,
					"tel": this.tel,
					"isDefault": false,
					"isSelected": false
				};

				this.addresses.push(items);
				// 如果此时地址小于三个 则push进去
				if(this.addressBackUp.length < 3) {
					this.addressBackUp.push(items);
				}
				
				this.maskShow = false;
				this.addShow = false;
			}else {
				alert('值不能为空');
			}
			this.userName = '';
			this.streetName = '';
			this.tel = '';
		},
		addAddressDismiss() {
			this.maskShow = false;
			this.addShow = false;
			this.userName = '';
			this.streetName = '';
			this.tel = '';
		},
		standard() {
			if(!this.deliverStandard) {
				this.deliverStandard = true;
				this.deliverHigher = false;
			}
		},
		higher() {
			if(!this.deliverHigher) {
				this.deliverHigher = true;
				this.deliverStandard = false;
			}
		},
		moreData() {
			this.more = false;
			this.less = true;
			this.addressBackUp = this.addresses;
		},
		lessData() {
			this.less = false;
			this.more = true;
			this.addressBackUp = this.addresses.slice(0, 3);
		},
		liClick(index) {
			this.selectIndex = index;
			// 点击当前li的时候让别的li的isSelected都为false
			this.addressBackUp.forEach(function (item, i) {
				if(i === index) {
					item.isSelected = true;
				}else {
					item.isSelected = false;
				}
			})
		}
	}
})