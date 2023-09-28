 // Implement a class `Todo` having below methods
 //    - add(todo): adds todo to list of todos
 //    - remove(indexOfTodo): remove todo from list of todos
 //    - update(index, updatedTodo): update todo at given index
 //    - getAll: returns all todos
 //    - get(indexOfTodo): returns todo at given index
 //    - clear: deletes all todos
 class Todo {
    constructor(){
      this.idx = 0;
      this.list = {}; // key(idx) -> todo
    }
    add(todo){
      var myList = this.list;
      myList[this.idx] = todo;
      this.idx = this.idx + 1;
    }
    remove(id){
      var myList = this.list;
      delete myList[id];
    }
    update(id, updatedTodo){
      var myList = this.list;
      if(myList[id]){
        myList[id] = updatedTodo;
      }else{
        console.log("The Todo Does not Exist!")
      }
    }
    getAll(){
      var myList = this.list;
      var objs = Object.values(myList)
      return objs;
    }
    get(id){
      var myList = this.list;
      return myList[id];
    }
    clear(){
      var myList = this.list;
      var Keys = Object.keys(myList);
      for(var i = 0;i<Keys.length;i++){
        delete myList[Keys[i]];
      }
      return myList;
    }
  }
  var lis = new Todo();
  lis.add("Task 1");
  lis.add("Task 2");
  lis.add("Task 3");
  lis.add("Task 2");
  lis.remove(5);
  var ans = lis.getAll();
  console.log(ans);

  /*
    Fails for - 
        test('remove', () => {
            todoList.add('Task 1');
            todoList.add('Task 2');
            todoList.add('Task 3');

            todoList.remove(1);
            expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);

            todoList.remove(0);
            expect(todoList.getAll()).toEqual(['Task 3']);

            todoList.remove(2);
            expect(todoList.getAll()).toEqual(['Task 3']);
        });


    Update Code -
    class Todo {
        constructor() {
            this.todos = [];
        }

        add(todo) {
            this.todos.push(todo);
        }

        remove(indexOfTodo) {
            this.todos.splice(indexOfTodo, 1);
        }

        update(index, updatedTodo) {
            this.todos[index] = updatedTodo;
        }

        getAll() {
            return this.todos;
        }

        get(indexOfTodo) {
            return this.todos[indexOfTodo];
        }

        clear() {
            this.todos = [];
        }
    }
    
  */

