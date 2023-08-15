import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Esta URL obtiene el listado de todas las task
  private baseURL = "/api/tasks";

  private baseURL2 ="http://localhost:8080/api/tasks"; 

  constructor(private httpClient : HttpClient) {  }

  ///-------------------------------------

  obtenerListaTareas():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL2}`); 
  }

  registerTask(task : Task) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`,task); 
  }

  deleteTask(id:number):Observable<Task>{
    return this.httpClient.delete<Task>(`${this.baseURL2}/${id}`); 
  }


  ///-------------------------------------

  //Obtener las task 
  getListTask():Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseURL}`);
  }

  

  updateTask(id:number, task:Task):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,task); 
  }

  
   
}
