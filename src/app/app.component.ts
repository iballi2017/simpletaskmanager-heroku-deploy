import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng11-template';
isPopupOpened = false;
  constructor(public dialog: MatDialog){}
  addTask(){
    alert("Add Task!");
  }

  
  openDialog(): void {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(TaskFormComponent, {
      // maxWidth: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.isPopupOpened = false;
    });
  }
}
