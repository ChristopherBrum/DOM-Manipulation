document.addEventListener("DOMContentLoaded", () => {
  const inventory = {
    lastId: 0,
    collection: [],

    setDate: function() {
      let date = new Date();
      const orderDate = document.getElementById("order_date");
      orderDate.textContent = date.toUTCString();
    },

    cacheTemplate: function() {
      const iTmpl = document.getElementById("inventory_item");
      const html = iTmpl.innerHTML;
      this.template = iTmpl.innerHTML;
      iTmpl.remove();
    },

    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },

    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },

    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },

    update: function(item) {
      let id = this.findID(item),
          itemData = this.get(id);
          
      itemData.name = item.querySelector("[name^=item_name]").value;
      itemData.stock_number = item.querySelector("[name^=item_stock_number]").value;
      itemData.quantity = item.querySelector("[name^=item_quantity]").value;
    },

    newItem: function(e) {
      e.preventDefault();
      let item = this.add();
      let iTmpl = this.template.replaceAll(/ID/g, item.id);
      
      document.getElementById("inventory").insertAdjacentHTML('beforeend', iTmpl);
    },

    findParent: function(e) {
      return (e.target).closest("tr");
    },

    findID: function(item) {
      return +item.querySelector("input[type='hidden']").value;
    },

    deleteItem: function(e) {
      e.preventDefault();
      
      if (e.target.classList.contains("delete")) {
        const item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
    },

    updateItem: function(e) {
      if (e.target.tagName === 'INPUT') {
        const item = this.findParent(e);
        this.update(item);
      }
    },

    bindEvents: function() {
      document.getElementById("add_item").addEventListener("click", this.newItem.bind(this));
      document.getElementById("inventory").addEventListener("click", this.deleteItem.bind(this));
      document.getElementById("inventory").addEventListener("focusout", this.updateItem.bind(this));
    },

    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
  
  inventory.init();
});
