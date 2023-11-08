class Todo {
    // id = 0;
    // description = "";
    constructor(id, description) {
      this.id = id;
      this.description = description;
    }
  
    getTodo() {
      return { id: this.id, description: this.description };
    }
  
    setDescription(newDes) {
      this.description = newDes;
    }
  }

// module.exports = Todo
export {Todo}