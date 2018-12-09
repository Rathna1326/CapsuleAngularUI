import { Component, OnInit, Input, Output, OnChanges, EventEmitter  } from '@angular/core';
import { APIService } from  '../api.service';
import { Task } from '../task';
import { SmartTable} from 'angular-smart-table';



@Component({
  selector: 'app-view-task',
  templateUrl: 'view-task.component.html',
  styleUrls: ['view-task.component.css'],
  
})
export class ViewTaskComponent implements OnInit {

  private  tasks:  Array<Task> = [];
  private headers: String[];
  @Output() show_update_task_event = new EventEmitter();
  settings = {
    delete:{
     confirmDelete: true
    },
    add:{
      confirmCreate: true
     },
     edit:{
      confirmSave: true
     },
     mode:'external'
     ,
    columns: {
      taskName: {
        title: 'Task Name'
      },
      parent_task_id: {
        title: 'Parent Task Id'
      },
      priority: {
        title: 'Priority'
      },
      start_date: {
        title: 'Start Date'
      },
      end_date: {
        title: 'End Date'
      }
    }
  };

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
  this.getTasks();

  }
onSaveConfirm(event){
  if (window.confirm('Are you sure you want to save?')) {
   // event.newData['name'] += ' + added in code';
   // event.confirm.resolve(event.newData);
  } else {
    event.confirm.reject();
  }
}

  public getTasks(){
    this.apiService.getTasks().subscribe((data:  Array<Task>) => {
      this.tasks  =  data;
      this.headers=Object.keys(data[0] );
     // alert("Data "+data);
      console.log(data);
      console.log(this.headers);
  });
  
  }

  updateTask(taskName){
    //alert("Data "+taskName);
    this.show_update_task_event.emit({
      taskName: taskName,
      title: "Update Task"
  });
  }
  deleteTask(taskName){}

}
