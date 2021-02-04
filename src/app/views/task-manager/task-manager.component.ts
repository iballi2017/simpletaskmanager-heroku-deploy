import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from 'src/app/components/task-details/task-details.component';
import { TaskPlan } from 'src/app/shared/model/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  todos: TaskPlan[] = [];
  started: TaskPlan[] = [];
  completed: TaskPlan[] = [];
  // @ViewChild('title') title:ElementRef | any;
  // @ViewChild('description') description:ElementRef | any;
  
  constructor(private _taskSvc: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllData();
  }

  onDrop(event: CdkDragDrop<any[]>){ 
      if(event.previousContainer === event.container){
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }else{
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }

  }

  handleSaveProgress(){
    this._taskSvc.saveProgress();
  }
  
  // handleAddTask(e:any){
  //   e.preventDefault();
  //   const _id = new Date().getTime().toString();
  //   const title = this.title?.nativeElement?.value;
  //   const description = this.description?.nativeElement.value
  //   let task = {
  //     id: _id,
  //     title: title,
  //     description: description
  //   }
  //   if(task.title != "" && task.description != ""){
  //     this._taskSvc.addTask(task);
  //   }
    
  //   this.title.nativeElement.value = ""
  //   this.description.nativeElement.value = ""
  // }

  getAllData(){
    this.todos = this._taskSvc.getTodos();
    this.started = this._taskSvc.getStarted();
    this.completed = this._taskSvc.getCompleted();
  }

  handleRemoveTodoItem(id:any){
    this._taskSvc.removeTaskFromTodo(id);
    this.getAllData();
  }

  // handleRemoveStartedItem(id:any){
  //   console.log(id);
  //   this._taskSvc.removeTaskFromStarted(id);
  //   this.getAllData();
  // }

  handleRemoveCompletedItem(id:any){
    console.log(id);
    this._taskSvc.removeTaskFromCompleted(id);
    this.completed = this._taskSvc.getCompleted();
    this.getAllData();
  }
  
  handleReset(){
    this._taskSvc.resetTask();
    this.getAllData();
  }


  
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
