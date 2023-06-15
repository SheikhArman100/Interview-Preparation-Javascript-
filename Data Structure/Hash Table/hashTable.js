//! ### **Working Principle**
// - set to store key-value pairs
// - get to retrieve a value given its key
// - remove to delete a key value pair

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    console.log(this.table[index]);
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} => ${this.table[i]}`);
      }
    }
  }
}

const table1=new HashTable(30)
table1.set("Cristiano","Ronaldo")
table1.set("Lionel","Messi")
table1.set("Steph","Curry")
table1.set("Virat","Kohli")

table1.display()
table1.get("Suarez")