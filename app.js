var app = new Vue({
  el: '#app',
  data: {
    items: [],
    newItem: ''
  },
  methods: {
    addItem: function () {
      if (this.newItem.trim() !== '') {
        this.items.push(this.newItem);
        this.newItem = '';
      }
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
    }
  }
});
