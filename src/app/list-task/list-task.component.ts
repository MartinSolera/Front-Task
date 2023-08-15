import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit{

  taskArray : Task[]; 

  constructor(private taskService : TaskService, private router:Router){ }

  ngOnInit(): void {
    this.getDatos(); 
  }

   getDatos(){
    this.taskService.obtenerListaTareas().subscribe(dato => {
      this.taskArray = dato;
    });
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(data => {
      this.getDatos();
    })
  }

  ///-------------------------------------------

   updateTask(id:number, task:Task){
    this.taskService.updateTask(id, task).subscribe(dato => {
      console.log(dato);
    });
  }
}