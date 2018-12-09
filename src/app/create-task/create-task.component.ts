import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';
import { APIService } from  '../api.service';
import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  create_task_form: FormGroup;

  private  tasks:  Array<Task> = [];
  vaildMessage : string = "";

  constructor(private  apiService:  APIService, formBuilder: FormBuilder) { 
   
    this.create_task_form = formBuilder.group({
      taskName: ["", Validators.required],
      priority: ["", Validators.required],
      parent_task_id: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date:["", Validators.required]
    });
  }

  ngOnInit() {
  }

  createTask(){
 console.log(this.create_task_form.value);
    // send data to server
    this.vaildMessage = "Task has been created successfully";
    this.apiService.createTask(this.create_task_form.value)
        .subscribe(
             task => {
                // show an alert to tell the user if product was created or not
                console.log(task);

                // go back to list of products
                this.getTasks();
             },
             error => console.log(error)
         );
}

public getTasks(){
  this.apiService.getTasks().subscribe((data:  Array<Task>) => {
    this.tasks  =  data;
    alert("Data "+data);
    console.log(data);
});
}

}
