new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1000000001,
        unit: '隻',
        category: '手機',
        title: 'Iphone11',
        origin_price: 23000,
        price: 19800,
        description: '難得特價',
        content: '蘋果爸爸只好買了',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      },
      {
        id: 1000000002,
        unit: '隻',
        category: '手機',
        title: 'Iphone11 pro',
        origin_price: 41000,
        price: 39500,
        description: '三眼怪',
        content: '買完吃土',
        is_enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1569350691771-34ce8273f865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

      }
    ],
    //設定一個tempProduct確認內容經過修改之後再發送,而不會直接改到data內的資料
    tempProduct: {}
  },
  methods: {
    updateProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempProduct;
          }
        });
      } else {
        //用時間來設定id 
        const id = new Date().getTime();
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
      $('#newproductModal').modal('hide')
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {};
          $('#newproductModal').modal('show');
          break;
        case 'edit':
          this.tempProduct = Object.assign({}, item); //深層複製 O要大寫
          $('#newproductModal').modal('show');
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          this.tempProduct = Object.assign({}, item);
          break;
        default: break;
      }
    },
    delProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide')
    },
  },
});