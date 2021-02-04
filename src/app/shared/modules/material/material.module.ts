import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,MatListModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,DragDropModule,MatDialogModule
  ],
  exports: [
    MatToolbarModule,MatListModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,DragDropModule,MatDialogModule
  ]
})
export class MaterialModule { }
