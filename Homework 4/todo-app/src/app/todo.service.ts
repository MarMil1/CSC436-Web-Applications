import { Injectable } from '@angular/core';
import {AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoData: AngularFireList<Todo>;

constructor(private firebaseDatabase: AngularFireDatabase) {
  this.todoData = firebaseDatabase.list('todolist');
 }

 addTask(todo: Todo): void {
   this.todoData.push(todo);
 }

 editTask(id: string, value: any): Promise<void> {
   return this.todoData.update(id, value);
 }

 removeTask(id: string): Promise<void> {
   return this.todoData.remove(id);

 }

}
