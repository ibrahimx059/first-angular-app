import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss']
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoitems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    ).subscribe((todos) => {
      this.todoitems.set(todos);
      console.log(todos);
    });
  }
}
