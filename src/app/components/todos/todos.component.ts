import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos
      })
  }

  handleDeleteOnTodo = (id) => {
    console.log('from parent :', id)
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.todoService.deleteTodo(id)
  }

  handleAddSubmit = (title) => {
    console.log(title)
    this.todoService.addTodo(title)
      .subscribe(todo => {
        this.todos.push(todo)
        console.log(todo)
      })
  }
}
