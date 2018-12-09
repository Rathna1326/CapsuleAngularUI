import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:8080/TaskManager';
  constructor(private  httpClient:  HttpClient) {}

  getTasks(){
    return this.httpClient.get(`${this.API_URL}/tasks`);
  }

  createTask(task){
    
    return this.httpClient.post(`${this.API_URL}/tasks/addTask/`,task);
  }

  updateTask(task){
    
    return this.httpClient.post(`${this.API_URL}/updateTask/`,task);

}
  endTask(taskName){
    return this.httpClient.delete(`${this.API_URL}/deleteTask/`+ taskName);
  }

  readOneTask(taskName){
    return this.httpClient.get(`${this.API_URL}/getTask/`+ taskName);
  }
} 
