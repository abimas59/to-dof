import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { title } from 'process';
import { describe } from 'node:test';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,MatButtonModule,FormsModule,MatInputModule,MatNativeDateModule,MatDatepickerModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  constructor(private service: TodoService, private router: Router){}

  todo: Todo = {
    title:'',
    describe:'',
    dateToEnd: new Date(),
    finalizar: false
  }
  ngOnInit(): void {
  }
  create():void{
    this.formataData();
    this.service.create(this.todo).subscribe((res)=>{
      this.service.message('To-do criado com sucesso!');
      this.router.navigate(['']);
    })
  }
  formataData():void{
    let data = new Date(this.todo.dateToEnd)
    this.todo.dateToEnd = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  }
}
