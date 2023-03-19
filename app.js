var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    items: []
  },
  mounted() {
    // localStorage からデータを読み込む
    if (localStorage.getItem('items')) {
      try {
        this.items = JSON.parse(localStorage.getItem('items'));
      } catch (e) {
        localStorage.removeItem('items');
      }
    }
  },
  methods: {
    addItem: function () {
      if (this.newItem.trim() === '') {
        return;
      }
      this.items.push(this.newItem.trim());
      this.newItem = '';
      this.saveData();
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
      this.saveData();
    },
    saveData: function () {
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
});
