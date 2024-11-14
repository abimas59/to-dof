import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { title } from 'process';
import { describe } from 'node:test';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink,MatButtonModule,FormsModule,MatInputModule,MatNativeDateModule,MatDatepickerModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(private service: TodoService, private router: Router, private route: ActivatedRoute){}
  todo: Todo = {
    title:'',
    describe:'',
    dateToEnd: new Date(),
    finalizar: false
  }
  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }
  findById(): void {
    this.service.findById(this.todo.id).subscribe((res)=>{
      this.todo = res;
    })
  }
  atualizar():void{
    this.service.update(this.todo).subscribe((res)=>{
      this.service.message('To-do atualizado com sucesso!');
      this.router.navigate(['']);
    })
  }
  formataData():void{
    let data = new Date(this.todo.dateToEnd)
    this.todo.dateToEnd = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  }

}
