import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onClickDueDate(todo, event){
    this.todoService.editTask(todo.id, {dueDate: event.target.value})
    .catch(e => console.log(e));
  }

  onClickDelete(todo) {
    this.todoService.removeTask(todo.id);

  }

}
