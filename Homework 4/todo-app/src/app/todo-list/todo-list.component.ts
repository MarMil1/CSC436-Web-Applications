import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todoData.snapshotChanges().pipe(
      map(data => data.map(
        a => 
        ({id: a.payload.key, ... a.payload.val()})
      ))
    ).subscribe(tasks => {this.todoList = tasks});
  }

}
