import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo
  @Output() handleDeleteOnTodo = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses = () => {
    const classes = {
      'is-completed': this.todo.completed
    }
    return classes
  }

  handleCheckboxChange = (e, id) => {
    this.todo.completed = e.target.checked
    console.log(id, e.target.checked)
    this.todoService.toggleTodo(this.todo)
      .subscribe(todo => {
        console.log(todo)
      })
  }

  handleDelete = (id) => {
    this.handleDeleteOnTodo.emit(id)
    console.log('from child :', id)
  }
}
