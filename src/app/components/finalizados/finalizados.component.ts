import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Todo } from '../../models/todo';
import { NgFor } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-finalizados',
  standalone: true,
  imports: [MatBadgeModule,MatButtonModule,MatCardModule,MatIconModule,NgFor,MatSnackBarModule,RouterLink],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent {
  listFinished: Todo [] =[];

  constructor(private service: TodoService){

  }

    ngOnInit(): void {
      this.findAll();

    }

    findAll():void{
      this.service.findAll().subscribe((res)=>{
        res.forEach(todo=>{
          if(todo.finalizar){
            this.listFinished.push(todo);
          }else{
          }
        })
      })
    }
    
}
