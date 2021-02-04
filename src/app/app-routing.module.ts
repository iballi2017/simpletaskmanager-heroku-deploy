import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TaskManagerComponent } from './views/task-manager/task-manager.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'task-manager'},
  // {path: 'home', component: HomeComponent},
  // {path: 'task-manager', component: TaskManagerComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
