import { Injectable } from '@angular/core';
import { TaskPlan } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  todos: TaskPlan[] = [
    // {
    //   id: '1',
    //   title: "Gumbo beet greens",
    //   description: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
    // },
    // {
    //   id: '2',
    //   title: "Turnip greens yarrow",
    //   description: "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko."
    // },
    // {
    //   id: '3',
    //   title: "Nori grape silver beet",
    //   description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify."
    // },
  ]
  started: TaskPlan[] = []
  completed: TaskPlan[] = []
  constructor() { }

  getTodos() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos") || '{}');
      return this.todos;
    } else {
      localStorage.setItem("todos", JSON.stringify(this.completed));
    }
    return this.todos
  }
  getStarted() {
    if (localStorage.getItem("started")) {
      this.started = JSON.parse(localStorage.getItem("started") || '{}');
      return this.started;
    } else {
      localStorage.setItem("started", JSON.stringify(this.started));
    }
    return this.started
  }
  getCompleted() {
    if (localStorage.getItem("completed")) {
      this.completed = JSON.parse(localStorage.getItem("completed") || '{}');
      return this.completed;
    } else {
      localStorage.setItem("completed", JSON.stringify(this.completed));
    }
    return this.completed
  }

  saveProgress() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('started', JSON.stringify(this.started));
    localStorage.setItem('completed', JSON.stringify(this.completed));
  }

  addTask(task: TaskPlan) {
    let newList = this.todos.unshift(task);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    return newList
  }

  removeTaskFromTodo(id: string) {
    let confirmation = confirm("Do you really want to delete this item ?");
    if (!confirmation) {
      return
    } else {
      let newList = this.todos.filter((item: any) => item.id != id);
      this.todos = newList;
      localStorage.setItem("todos", JSON.stringify(this.todos));
      return this.todos;
    }
  }
  // removeTaskFromStarted(id: string) {
  //   let confirmation = confirm("Do you really want to delete this item ?");
  //   if (!confirmation) {
  //     return
  //   } else {
  //     let newList = this.started.filter((item: any) => item.id != id);
  //     this.started = newList;
  //     localStorage.setItem("started", JSON.stringify(this.started));
  //     return this.started;
  //   }
  // }
  removeTaskFromCompleted(id: string) {
    let confirmation = confirm("Do you really want to delete this item ?");
    if (!confirmation) {
      return
    } else {
      let newList = this.completed.filter((item: any) => item.id != id);
      this.completed = newList;
      localStorage.setItem("completed", JSON.stringify(this.completed));
      return this.completed;
    }
  }

  resetTask() {
    let confirmation = confirm("Do you really want to clear this board?");
    if (!confirmation) {
      return
    } else {
      let newList = this.todos = this.started = this.completed = [];
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("started", JSON.stringify(this.todos));
      localStorage.setItem("completed", JSON.stringify(this.todos));
      return newList
    }
  }
}
