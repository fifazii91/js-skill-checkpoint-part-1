// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ id: 5, todo: "Walk the dog" });

for (let i of myTodo) {
  if (i.id === 4) {
    i.todo = "Go to the gym";
  }
}

myTodo.pop();

console.log(myTodo);

let todoShow = myTodo[myTodo.length - 1];
console.log("To-do id: " + todoShow.id + ", " + todoShow.todo);
