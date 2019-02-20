import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() handleAddSubmit = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.handleAddSubmit.emit(e.target.title.value)
  }

}
