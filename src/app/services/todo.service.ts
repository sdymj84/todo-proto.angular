import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = "https://jsonplaceholder.typicode.com/todos"
  todoLimit = "?_limit=5"
  // todoLimit = ""

  constructor(private http: HttpClient) { }

  getTodos = () => {
    return this.http.get(`${this.todosUrl}${this.todoLimit}`)
  }
  toggleTodo = (todo) => {
    return this.http.patch(`${this.todosUrl}/${todo.id}`, {
      completed: todo.completed
    })
  }
  deleteTodo = (todo) => {
    return this.http.delete(`${this.todosUrl}/${todo.id}`)
  }
  addTodo = (title) => {
    return this.http.post(this.todosUrl, {
      title,
      completed: false
    })
  }
}
