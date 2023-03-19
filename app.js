const items = JSON.parse(localStorage.getItem("items")) || [];

var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    newPriority: '',
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
      this.items.push({
        name: this.newItem.trim(),
        isEditing: false,
        priority: this.newPriority
      });
      this.newItem = '';
      this.newPriority = '';
      this.saveData();
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
      this.saveData();
    },
    editItem: function (index) {
      this.items[index].isEditing = true;
    },
    updateItem: function (index) {
      this.items[index].isEditing = false;
      this.saveData();
    },
    saveData: function () {
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
});
