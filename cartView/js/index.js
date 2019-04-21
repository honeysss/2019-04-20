
var vue = new Vue({
  el: '#app',
  data: {
  	productData: [
      {
        "productId": "1102958935",
        "productName": "中华香烟",
        "productPrice": 19,
        "productQuentity": 1,
        // "selected": false,
        "show": true,
        "productImage": "img/烟.jpg",
        "parts": [
          {
            "partId": "110295",
            "partName": "打火机"
          },
          {
            "partId": "110296",
            "partName": "橡皮擦"
          }
        ]
      },
      {
        "productId": "1102958936",
        "productName": "镜子",
        "productPrice": 10,
        "productQuentity": 2,
        // "selected": false,
        "show": true,
        "productImage": "img/镜子.jpg",
        "parts": [
          {
            "partId": "110297",
            "partName": "小布"
          },
          {
            "partId": "110298",
            "partName": "贴纸"
          }
        ]
      }
    ],
  	totalPrice: 0,
    selectAllStatus: false,
    payPrice: 0,
    maskShow: false,
    productItem: ''
  },
  filters: {
    fliterPrice(value, type) {
      return '￥' +value.toFixed(2) + type;
    }
  },
  mounted () {
    this.cartView();
  },
  methods: {
    cartView() {
      
    },
    selectAll() {
      var _this = this;
      this.selectAllStatus = !this.selectAllStatus;
      if(this.selectAllStatus) {
        // 如果此时还没有点击过商品就点击了全选
        for(var i = 0; i < this.productData.length; i ++) {
          if(this.productData[i].selected === 'undefined') {
            this.$set(this.productData[i], 'selected', false);
          }
          this.productData[i].selected = true;
        }
      }else {
        for(var i = 0; i < this.productData.length; i ++) {
          this.productData[i].selected = false;
        }
      }

      this.calculatePrice();
    },

    cancelAll() {
      var _this = this;
      this.selectAllStatus = false;
      // for(var i = 0; i < this.productData.length; i ++) {
      //   this.productData[i].selected = false;
      // }
      this.productData.forEach(function (value, index) {
        if(value.selected === 'undefined') {
          _this.$set(value, 'selected', false);
        }else {
          value.selected = false;
        }
      })

      this.calculatePrice();
    },

    isChecked(items) {
      // 判断一下有没有selected字段 如果没有 添加一个 并设为true
      // 否则取反
      if(items.selected === undefined) {
        // Vue.set(items, 'selected', true);
        this.$set(items, 'selected', true);
      }else {
        items.selected = !items.selected;
      }

      this.calculatePrice();
    },
    reduce(items) {
      if(items.productQuentity > 1) {
        items.productQuentity--;
      }
      this.calculatePrice();
    },
    add(items) {
      items.productQuentity++;
      this.calculatePrice();
    },
    // delete是关键字
    deleteItem(items) {
      this.maskShow = true;
      console.log(items);
      this.productItem = items;
    },
    toAddress() {
      location.href="address.html";
    },
    confirmDelete() {
      // this.productItem.selected = false;
      // this.productItem.show = false;
      var index = this.productData.indexOf(this.productItem);
      this.productData[index].selected = false;
      this.productData[index].show = false;
      this.calculatePrice();
      this.maskShow = false;
    },
    calculatePrice() {
      var _this = this;
      this.payPrice = 0;
      this.productData.forEach(function (item, index) {
        if(item.selected) {
          _this.payPrice += item.productQuentity * item.productPrice;
        }
      })
    }
   }
})