import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  newTask: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.newTask = new Todo();
  }

  AddNewTask() {
    this.newTask.dueDate = 'urgent';
    this.todoService.addTask(this.newTask);
  }

}
