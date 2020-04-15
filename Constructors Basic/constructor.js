function Laptop(manifacturer, memory, capacity) {
  this.manifacturer = manifacturer;
  this.memory = memory;
  this.capacity = capacity;

  this.display = function() {
    console.log(this.manifacturer);
    console.log(this.memory);
    console.log(this.capacity);
  };
};

var laptop1 = new Laptop("Acer", "4GB", "500GB");
var laptop2 = new Laptop("Samsung", "6GB", "1TB");
var laptop3 = new Laptop("Apple", "16GB", "2TB");

laptop1.display();
laptop2.display();
laptop3.display();