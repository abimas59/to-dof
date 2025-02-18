import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { enviroment } from '../../enviroments/enviroments';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = enviroment.baseUrl
  baseUrlOpen = enviroment.baseUrlOpen

  constructor(private http:HttpClient, private snack: MatSnackBar) { }

  findById(id: any): Observable<Todo>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Todo>(url);
  }
  findAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl);
  }
  findOpen():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrlOpen);
  }
  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl,todo);
  }
  update(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`
    return this.http.put<Todo>(url,todo);
  }
  delete(id:any):Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }
  message(msg: String):void{
    this.snack.open(`${msg}`,"OK",{horizontalPosition:'end',verticalPosition:'top',duration:4000})
  }
}
