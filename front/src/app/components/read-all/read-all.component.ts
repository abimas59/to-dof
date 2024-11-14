import { Component, OnInit } from '@angular/core';
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
  selector: 'app-read-all',
  standalone: true,
  imports: [RouterLink,MatCardModule, MatButtonModule, MatIconModule,NgFor,MatBadgeModule,MatSnackBarModule,RouterLink],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent implements OnInit {
  closed = 0;

  list: Todo[]=[  ];
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
            this.list.push(todo);
          }
        })
        this.closed = this.listFinished.length
      })
    }
    findOpen():void{
      this.service.findOpen().subscribe((res)=>{
        this.list = res;
      })
    }
    finalizar(item: Todo):void{
      item.finalizar = true;
      this.service.update(item).subscribe(()=>{
        this.service.message('Task finalizada com sucesso!');
          this.list = this.list.filter(todo => todo.id !== item.id);
          this.closed++;
      })
    }
    delete(id:any):void{
      this.service.delete(id).subscribe((res)=>{
        if(res === null){
          this.service.message('Task deletada com sucesso!');
          this.list = this.list.filter(todo => todo.id !== id);
        }
      })
    }

}
