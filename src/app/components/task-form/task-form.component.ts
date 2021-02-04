import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/model/dialogData';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  public _TaskForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _formBuilder: FormBuilder, private _taskSvc:TaskService) { }

  ngOnInit(): void {

    this._TaskForm = this._formBuilder.group({
      _id: new Date().getTime().toString(),
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

onSubmit(){
  // console.log(this._TaskForm.value);
  this._taskSvc.addTask(this._TaskForm.value);
  this.dialogRef.close();
}
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
