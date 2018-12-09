import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';
import { FilterPipeParent} from './filterParent.pipe';
import {FilterPipePrior} from './filterPrior.pipe'; 
import {FilterPipeStart} from './filterStart.pipe'; 
import {FilterPipeEnd} from './filterEnd.pipe'; 
import { ViewTaskComponent } from './view-task/view-task.component';
import {AppRoutingModule} from  './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { EndTaskComponent } from './end-task/end-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    EndTaskComponent,
    FilterPipe,
    FilterPipeParent,
    FilterPipePrior,
    FilterPipeStart,
    FilterPipeEnd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
